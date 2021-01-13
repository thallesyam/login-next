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
          <h3>Sign Up</h3>
          <CloseIcon />
        </section>
        <form>
          <div>
            <input name="name" type="name" placeholder="Nome Completo" />
          </div>
          <div>
            <input name="email" type="name" placeholder="Email" />
          </div>
          <div>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <button type="submit">sign up</button>
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
