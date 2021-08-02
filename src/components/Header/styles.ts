import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1em 12rem; //16px nas laterais, e 160px nas laterais
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: #fff;
    }

    button {
        font-style: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9); //escurece o botao
        }
    }
`;