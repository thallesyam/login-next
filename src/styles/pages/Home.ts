import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    text-rendering: optimizeLegibility;
    margin: 2rem 0;
    color: var(--secondaryTextColor);
    font-size: 5rem;
  }
  p {
    font-size: 1rem;
    color: var(--secondaryTextColor);
    margin: 2rem;
  }
  a {
    width: 100%;
    height: 50px;
    max-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;

    border-radius: 10px;
    background-color: var(--primaryTextColor);
    transition: 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
`
