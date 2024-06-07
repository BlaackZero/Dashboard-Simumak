import { IconActivityHeartbeat, IconDashboard, IconHome, IconUserCog } from "@tabler/icons-react"
import { MenuContainer } from "./style"
import { NavLink } from "react-router-dom"

export const Menu = () => {
  return (
    <MenuContainer>
      <h1>Logo</h1>
      <ul>
        <NavLink to={"/"}>
          <li><IconHome size={24} stroke={2}/>Inicio</li>
        </NavLink>
        <NavLink to={"/Simulador"}>
          <li><IconDashboard size={24} stroke={2}/>Simulador</li>
        </NavLink>
        <NavLink to={"/Ejercicios"}>
          <li><IconActivityHeartbeat size={24} stroke={2}/>Ejercicios</li>
        </NavLink>
        <NavLink to={"/Usuarios"}>
          <li>
              <IconUserCog size={24} stroke={2}/>Usuarios
          </li>
        </NavLink>
      </ul>
    </MenuContainer>
  )
}
