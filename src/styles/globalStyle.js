import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000000;
    ${'' /* font-family: Open-Sans, Helvetica, Sans-Serif; */}
    ${'' /* font-family: 'Urbanist', sans-serif; */}
    ${'' /* font-family: 'Noto Sans', sans-serif; */}
    ${'' /* font-family: 'Lato', sans-serif; */}
    font-family: 'DM Sans', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  /* Contenedor para las dos imágenes */
.image-container {
  ${
    '' /* position: absolute;
 animation: fadeInBG 3s ease-in-out;  */
  }
  margin-left: 41.5rem;
  position: absolute;
  width: 500px;
  height: 100vh;

  ${
    '' /* @keyframes fadeInBG {
     0% {
     opacity: 0;
     scale: 110%;
       filter: blur(10px);
     }
     50% {
       opacity: 0.5;
       filter: blur(5px);
     }
     100% {
       opacity: 1;
     }
  } */
  }
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
  width: 400px;
}
.image-container img {
  width: 300px;
  top: 3rem;
  left: 3rem

}


 }
`

export default GlobalStyle
