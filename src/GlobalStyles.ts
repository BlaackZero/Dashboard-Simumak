import { createGlobalStyle } from 'styled-components';

export const color = {
	primary: '#efed05',
	secondary: '#2E2E2F',
	background: '#f8f9fa',
}

export const GlobalStyles = createGlobalStyle`
html{
        box-sizing: border-box;
    }
    *,*::before,*::after{
        box-sizing: border-box;
    }
    body{
        margin: 0;
		background-color: ${color.background};
    	font-family: 'Poppins', sans-serif;
        h1,h2,h3,h4,h5,h6,p{
            margin: 0;
        }

		ul {
			margin-block-start: 0;
			margin-block-end: 0;
			padding-inline-start: 0;

		}

		.table {
			max-width: 95%;
		}

		.tableButton {
			padding: 6px;
			cursor: pointer;
			border-radius: 12px;
			border: none;
			background-color: #1f64ff;
			display: flex;
			align-items: center;

			svg {
				color: ${color.primary};
			}
	}

    }
`