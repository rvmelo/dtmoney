import styled from 'styled-components';

export const Container = styled.div`
  // mostra os elementos em grade
  display: grid;
  // três colunas de tamanhos flexíveis (repeat(3, 1fr) -> 1fr 1fr 1fr)
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      /* display: block faz o strong se comportar como uma div permitindo 
      a utilização de margin-top */
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    // div que possui className highlight background terá cor de fundo diferente
    &.highlight-background {
      background: var(--green);
      color: #fff;
    }

  }

`;
