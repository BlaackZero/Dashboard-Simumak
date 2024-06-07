import styled from "styled-components";
import { color } from "../../GlobalStyles";

export const MenuContainer = styled.aside`
    position: sticky;
    top: 0;
    padding: 0 16px;
    width: 230px;
    height: 100vh;
    background-color: #ededed;
    border-right: 3px solid ${color.primary};

    h1 {
        margin-top: 12px;
    }

    ul {
        margin-top: 24px;
        list-style: none;

        a {
            text-decoration: none;
            color: black;

            &.active {
                li {
                    background-color: #f5f5f5;
                }
            }
        }
        
        li {
            border-radius: 12px;
            margin: 12px 0; 
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            padding: 8px 6px;
            cursor: pointer;

            &:hover {
                background-color: #f5f5f5;
            }
        }
    }
`