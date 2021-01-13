import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

 html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  *{
    box-sizing: border-box;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background: var(--background);
    line-height: 1;
    font-size: 100%;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  body {
    --background: ${props => props.theme.colors.background};
    --border: ${props => props.theme.colors.border};
    --white: ${props => props.theme.colors.white};
    --black: ${props => props.theme.colors.black};
    --primaryColor: ${props => props.theme.colors.primaryColor};
    --lightprimaryColor: ${props => props.theme.colors.LightprimaryColor};
    --secondaryColor: ${props => props.theme.colors.secondaryColor};
    --primaryTextColor: ${props => props.theme.colors.primaryTextColor};
    --secondaryTextColor: ${props => props.theme.colors.secondaryTextColor};
  }

`
