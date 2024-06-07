import { BrowserRouter } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { GlobalStyles } from "./GlobalStyles"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.css';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navigation />
    </BrowserRouter>
  )
}
