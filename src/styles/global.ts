import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

// Variáveis de cores padrão utilizadas pelo aplicativo
:root {
  --background: #f0f2f5;
  --red: #e52e4d;
  --blue: #5429cc;
  --green: #33cc95;

  --blue-light: #6933ff;

  --text-title: #363f5f;
  --text-body: #969cb3;

  --background: #f0f2f5;
  --shape: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  // border-box significa que o elemento não aumenta de tamanho com um padding
  box-sizing: border-box;
}

html {
  /* Os valores estão em percentagem porque respeitam as configurações do tamanho de letra escolhidas
  pelo usuário. No caso não seria exatamente 15px ou 14px e sim o valor de percentagem multiplicado
  por um determinado valor definido nas preferências do usuário. */
  @media(max-width: 1080px) {
    font-size: 93.75%; // 15px
  }
  @media(max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

// 1 rem corresponde ao font-size definido na página

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}


// tudo que estiver desabilitado na aplicação sera apresentado em tela dessa forma
[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

// parte de fora do modal
.react-modal-overlay {

  background: rgba(0, 0, 0, 0.5);
  // quando tiver o scroll o modal não se move pois ele sempre ficará acima da tela
  // no caso a parte de fora do modal terá posição fixa
  position: fixed;

  // faz ocupar toda a tela
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

}

// parte de dentro do modal
.react-modal-content {

  /* se tiver com mais de 576px o modal não terá largura maior (para em 576)
  se tiver largura menor ou igual a 576px irá ocupar toda a largura da tela */
  width: 100%;
  max-width: 576px;

  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.24rem;

}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

}

`;