import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signInForm = z.object({
  // quando o usuário fizer um submit haverá um email que precisa ter o formato de string e será validado como e-mail
  email: z.string().email(),
})

// infer serve para converter a estrutura do zod para a tipagem do typescript
type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()
  // register serve para registrar campos no formulário - sintaxe: no input inserir como atributo {...register("nome do campo a ser registrado")}
  // handleSubmit serve para lidar com o submit de um form, não precisa fazer o event.preventDefault pois este módulo já lida com isso - sintaxe: no formulário inserir no onSubmit={handleSubmit(funçãoCriadaParaSubmit)}
  // formState retorna informações importantes sobre o estado do formulário, como: isSubmitting que retorna um valor booleano a depender se o form está em estado de submit (ainda carregando) ou se já deu erro/sucesso/ainda não foi enviado, retornando false. Pode ser usado no disabled do botão para o usuário não realizar múltiplas requisições enquanto o conteúdo é carregado.
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email })
      toast.success('Enviamos um link de autenticação para seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
    } catch (error) {
      toast.error('Credenciais inválidas')
      console.log(error)
    }
  }
  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link to="/sign-up">Novo Estabelecimento</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar Painel
          </h1>
          <p className="text-muted-foreground text-sm">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input type="email" id="email" {...register('email')} />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Acessar Painel
          </Button>
        </form>
      </div>
    </div>
  )
}
