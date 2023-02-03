import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.main};
    font-family: 'Roboto', sans-serif;
    ${'' /* font-family: 'Lato', sans-serif; */}
    ${'' /* font-family: 'DM Sans', sans-serif; */}
    ${'' /* font-family: 'Noto Sans', sans-serif; */}
    ${'' /* font-family: 'Urbanist', sans-serif; */}
    ${'' /*  */}
    ${'' /* font-family: 'Montserrat', sans-serif; */}
    ${'' /* font-family: 'League Spartan', sans-serif; */}
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

  /* Contenedor para las dos imágenes */
.image-container {
  margin-left: 41.5rem;
  position: absolute;
  width: 500px;
  height: 100vh;
}

/* Imagen original */
.image-container img {
  position: absolute;
  border-radius: 15px;
  width: 400px;
  height: auto;
  top: 4rem;
  left: 0;
  -webkit-mask-image: linear-gradient(to right, transparent, black 20px, black 90%, transparent);
  mask-image: linear-gradient(to right, transparent, black 20px, black 90%, transparent);
}

/* Copia de la imagen con bordes difuminados */
.image-container img:nth-of-type(2) {
  position: absolute;
   width: 450px;
  height: auto;
  top: 0;
  left: 0;
  filter: blur(5px);
}

 @media (max-width: 768px) {
  .image-container {
  margin: 1rem;
  position: relative;
  width: 300px;
}
.image-container img {
  width: 250px;
  top: 3rem;
  left: 1rem
}
 }
`
export default GlobalStyle
