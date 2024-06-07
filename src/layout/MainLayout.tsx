import { PropsWithChildren } from "react"
import { Menu } from "../components/Menu/Menu"
import { MainLayoutContainer } from "./style"

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <MainLayoutContainer>
        <Menu/>
        <section className="content">
          {children}
        </section>
    </MainLayoutContainer>
  )
}
