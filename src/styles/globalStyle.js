import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.background};
    font-family: 'Inter', sans-serif;
    ${'' /* font-family: 'Roboto', sans-serif; */}
    margin: 0;
    padding: 0;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 13px;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgb(68, 68, 68, 0.3); 
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 6px rgb(115, 115, 115, 0.6)
    }
        ::-webkit-scrollbar-thumb:hover {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 6px rgb(115, 115, 115, 0.8)
    }
  }
`
export default GlobalStyle
