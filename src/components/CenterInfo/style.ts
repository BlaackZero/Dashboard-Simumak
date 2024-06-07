import styled from "styled-components";
import { color } from "../../GlobalStyles";

export const CardCenter = styled.div`
    background-color: #e5e7eb;
    border: 2px solid lightgray;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    max-width: 300px;
    text-align: center;
    height: fit-content;

    .info {
        margin: 16px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            font-size: 1rem;
        }

        p {
            font-size: 1rem;
            font-weight: bold;
        }

        svg {
            color: ${color.secondary};
        }
    }
`