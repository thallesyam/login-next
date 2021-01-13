import React from 'react'

import {
  Container,
  FormContainer,
  CloseIcon,
  GoogleIcon
} from '../styles/pages/SignIn'

import Link from 'next/link'

const SignIn = (): JSX.Element => {
  return (
    <Container>
      <FormContainer>
        <section>
          <h3>Sign In</h3>
          <CloseIcon />
        </section>
        <form>
          <div>
            <input name="email" type="name" placeholder="Email" />
          </div>
          <div>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div>
            <button type="submit">sign in</button>
          </div>
        </form>
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
