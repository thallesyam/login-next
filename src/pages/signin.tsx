import React, { useRef, useState } from 'react'

import {
  Container,
  FormContainer,
  CloseIcon,
  GoogleIcon,
  SuccesMsg,
  ErrorMsg
} from '../styles/pages/SignIn'

import Link from 'next/link'
import { useRouter } from 'next/router'

const SignIn = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [succes, setSucces] = useState<boolean>(false)
  const [errorPassword, setErrorPassword] = useState<boolean>(false)
  const [errorEmail, setErrorEmail] = useState<boolean>(false)

  const router = useRouter()

  async function handleLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault()
    const resp = await fetch('http://localhost:3000/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      })
    })

    if (resp.status === 401) {
      // email error
      setErrorEmail(true)
      setErrorPassword(false)
      setSucces(false)
    } else if (resp.status === 403) {
      setErrorEmail(false)
      setErrorPassword(true)
      setSucces(false)
    } else {
      setSucces(true)
      setErrorEmail(false)
      setErrorPassword(false)
      router.push('/people')
    }
  }

  return (
    <Container>
      <FormContainer>
        <section>
          <h3>Sign In</h3>
          <CloseIcon />
        </section>
        <form>
          <div>
            <input
              name="email"
              type="name"
              placeholder="Email"
              ref={emailRef}
              required
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </div>
          <div>
            <button onClick={handleLogin} type="submit">
              sign in
            </button>
          </div>
        </form>
        {errorPassword && <ErrorMsg>Senha incorreta</ErrorMsg>}
        {errorEmail && <ErrorMsg>Email não existe</ErrorMsg>}
        {succes && <SuccesMsg>Login feito com sucesso</SuccesMsg>}
        <p>ou entre com</p>
        <Link href="/">
          <a>
            <GoogleIcon />
            Google
          </a>
        </Link>
        <div>
          <p>Não tem uma conta ?</p>
          <Link href="/signup">
            <a>Cadastre-se</a>
          </Link>
        </div>
      </FormContainer>
    </Container>
  )
}

export default SignIn
