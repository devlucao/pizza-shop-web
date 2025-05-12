import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerRestaurant } from '@/api/register-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signUpForm = z.object({
  // quando o usuário fizer um submit haverá um email que precisa ter o formato de string e será validado como e-mail
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

// infer serve para converter a estrutura do zod para a tipagem do typescript
type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  // register serve para registrar campos no formulário - sintaxe: no input inserir como atributo {...register("nome do campo a ser registrado")}
  // handleSubmit serve para lidar com o submit de um form, não precisa fazer o event.preventDefault pois este módulo já lida com isso - sintaxe: no formulário inserir no onSubmit={handleSubmit(funçãoCriadaParaSubmit)}
  // formState retorna informações importantes sobre o estado do formulário, como: isSubmitting que retorna um valor booleano a depender se o form está em estado de submit (ainda carregando) ou se já deu erro/sucesso/ainda não foi enviado, retornando false. Pode ser usado no disabled do botão para o usuário não realizar múltiplas requisições enquanto o conteúdo é carregado.
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      })
      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante.')
      console.log(error)
    }
  }
  return (
    <div className="p-8">
      <title>Cadastro | pizza.shop</title>
      <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link to="/sign-in">Fazer Login</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-muted-foreground text-sm">
            Seja um parceiro e comece suas vendas!
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
            <Input
              type="text"
              id="restaurantName"
              {...register('restaurantName')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input type="text" id="managerName" {...register('managerName')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input type="email" id="email" {...register('email')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Seu celular</Label>
            <Input type="tel" id="phone" {...register('phone')} />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Finalizar Cadastro
          </Button>
          <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
            Ao continuar você concorda com nossos{' '}
            <a className="underline-offset-4" href="#">
              Termos de serviço
            </a>{' '}
            e{' '}
            <a className="underline-offset-4" href="#">
              políticas de privacidade
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  )
}
