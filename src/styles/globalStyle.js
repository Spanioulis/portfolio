import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000000;
    ${'' /* font-family: Open-Sans, Helvetica, Sans-Serif; */}
    ${'' /* font-family: 'Urbanist', sans-serif; */}
    ${'' /* font-family: 'Noto Sans', sans-serif; */}
    font-family: 'DM Sans', sans-serif;
    ${'' /* font-family: 'Lato', sans-serif; */}
    margin: 0;
    padding: 0;
  }

  /* Contenedor para las dos imágenes */
.image-container {
  margin-left: 43rem;
  position: absolute;
  width: 600px;
  height: 100vh;
}

/* Imagen original */
.image-container img {
  position: absolute;
  border-radius: 15px;
  width: 400px;
  height: auto;
  top: 6rem;
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

`

export default GlobalStyle
