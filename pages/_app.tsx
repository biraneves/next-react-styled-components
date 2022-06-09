import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyle';

const theme = {
  colors: {
    primary_two: '#ff6a00',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
