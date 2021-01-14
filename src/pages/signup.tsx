import React, { useRef, useState } from 'react'

import {
  Container,
  FormContainer,
  CloseIcon,
  GoogleIcon,
  SuccesMsg,
  ErrorMsg
} from '../styles/pages/Signup'

import Link from 'next/link'
import { useRouter } from 'next/router'

const SignIn = (): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPassowordRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<string>()
  const [errorPassword, setErrorPassword] = useState<boolean>(false)
  const [errorEmail, setErrorEmail] = useState<boolean>(false)
  const [succes, setSucces] = useState<boolean>(false)

  const router = useRouter()

  async function handleLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault()

    if (passwordRef.current?.value === confirmPassowordRef.current?.value) {
      const resp = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          password: passwordRef.current?.value
        })
      })

      if (resp.status === 401) {
        setErrorEmail(true)
      } else {
        setMessage('Conta feita com sucesso')
        setErrorPassword(false)
        setErrorEmail(false)
        setSucces(true)
        router.push('/people')
      }
    } else {
      setErrorPassword(true)
      return false
    }
  }

  return (
    <Container>
      <FormContainer>
        <section>
          <h3>Sign Up</h3>
          <CloseIcon />
        </section>
        <form>
          <div>
            <input
              name="name"
              type="name"
              placeholder="Nome Completo"
              ref={nameRef}
            />
          </div>
          <div>
            <input
              name="email"
              type="name"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          <div>
            <input
              ref={confirmPassowordRef}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <button onClick={handleLogin} type="submit">
              sign up
            </button>
          </div>
        </form>
        {errorPassword && <ErrorMsg>Erro as senhas não coincidem</ErrorMsg>}
        {errorEmail && <ErrorMsg>Erro esse email já existe</ErrorMsg>}
        {succes && <SuccesMsg>{message}</SuccesMsg>}
        <p>ou entre com</p>
        <Link href="/">
          <a>
            <GoogleIcon />
            Google
          </a>
        </Link>
        <div>
          <p>Já tem uma conta ?</p>
          <Link href="/signin">
            <a>Login</a>
          </Link>
        </div>
      </FormContainer>
    </Container>
  )
}

export default SignIn
