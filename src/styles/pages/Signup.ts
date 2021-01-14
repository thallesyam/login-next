import styled from 'styled-components'
import { FiArrowLeft } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'

export const Container = styled.section`
  background-color: var(--background);

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.section`
  background-color: var(--white);

  width: 100%;
  max-width: 550px;
  min-height: 600px;

  border-radius: 16px;

  display: flex;
  flex-direction: column;

  text-align: center;

  padding: 50px;

  @media (max-width: 600px) {
    width: 90%;
    max-width: 90%;
  }

  > section {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 48px;

    h3 {
      font-size: 25px;
      color: var(--primaryTextColor);
      font-weight: 700;
    }
  }

  > form {
    div {
      width: 100%;
      padding: 0 10px;
      margin-bottom: 20px;

      input {
        width: 100%;
        height: 55px;

        border-radius: 8px;
        padding: 5px 15px;

        border: 2px solid var(--border);

        ::placeholder {
          font-size: 15px;
          color: var(--primaryTextColor);
          font-weight: 500;
        }
      }
    }

    button {
      width: 100%;
      border-radius: 8px;
      height: 50px;

      background-color: var(--primaryColor);
      font-size: 15px;
      text-transform: uppercase;
      color: #fff;

      border: none;

      cursor: pointer;

      transition: 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  p {
    font-size: 16px;
    color: var(--secondaryTextColor);
  }

  > a {
    width: 100%;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    padding: 5px 15px;

    margin: 20px 0;

    background-color: var(--background);

    text-decoration: none;
    color: var(--primaryTextColor);

    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;

    text-transform: uppercase;

    border: 2px solid var(--border);
    &:hover {
      opacity: 0.7;
    }
  }

  div {
    p {
      color: var(--primaryTextColor);
      font-size: 15px;
      margin-bottom: 10px;
    }
    a {
      color: var(--primaryColor);
      font-weight: 700;
    }
  }
`

export const LeftIcon = styled(FiArrowLeft)`
  color: var(--primaryColor);

  font-size: 32px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
export const GoogleIcon = styled(FcGoogle)`
  font-size: 15px;
  margin-right: 10px;
`

export const SuccesMsg = styled.span`
  font-size: 16px;
  margin: 15px 0;
  color: #00c851;
`

export const ErrorMsg = styled.span`
  font-size: 16px;
  margin: 15px 0;
  color: #ff4444;
`
