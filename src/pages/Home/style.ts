import styled from "styled-components";


export const GridDashboard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Ajusta el ancho mínimo y máximo de las columnas */
    gap: 1rem;
`