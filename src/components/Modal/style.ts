import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    .modalContent {
        position: relative;
        background-color: white;
        padding: 16px;
        margin: 32px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        max-height: 80vh; /* Limita la altura máxima del modal */
        overflow-y: auto; /* Habilita el desplazamiento vertical si el contenido es muy grande */
        width: 90%; /* Ancho predeterminado */
        max-width: 600px; /* Ancho máximo */
        min-height: 267px;
        min-width: 300px; /* Ancho mínimo */
        transition: all 0.3s esase-in-out;

        .titleModal {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            font-size: 22px;

            button {
                border: none;
                color: black;
                background-color: transparent;
            }
        }
    }
`