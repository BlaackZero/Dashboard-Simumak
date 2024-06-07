import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/Home/HomePage"
import { UsersPage } from "../pages/Users/UsersPage"


export const Navigation = () => {
  return (
    <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Usuarios" element={<UsersPage />} />
    </Routes>
  )
}
