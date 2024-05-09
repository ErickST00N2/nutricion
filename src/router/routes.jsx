import { Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/welcome";
import LoginPage from "../pages/login";
import RegistrarCitaPage from "../pages/registrar-cita";
import UserRegisterPage from "../pages/user-register";
import Error404Page from "../pages/error404";
import VerCitasPage from "../pages/ver-citas";
import PolicyPage from "../pages/policy";
import TermsPage from "../pages/terms";



//Objeto con los nombres de las rutas
/*
```javascript
// Objeto con los nombres de las rutas de la aplicación
// Este objeto proporciona nombres descriptivos para las rutas de la aplicación
// y sus respectivos paths (caminos).
// Utiliza `nameRoutes` para referenciar las rutas de forma clara y consistente.
const nameRoutes = {
    "WelcomePage": '/',
    "RegistrarCitaPage": '/Registrar-Cita',
    "VerCitasPage": '/Ver-Cita',
    "LoginPage": '/Login',
    "UserRegisterPage": '/SignUp',
    "Error404Page": '*'
};
```
*/
/// ``nameRoutes`` - Objeto con los nombres de las rutas
let nameRoutes = {
    "WelcomePage": '/',
    "RegistrarCitaPage": '/Registrar-Cita',
    "VerCitasPage": '/Ver-Cita1',
    "LoginPage": '/Login',
    "UserRegisterPage": '/SignUp',
    "PolicyPage": '/Policy',
    "TermsPage": '/Terms',
    "Error404Page": '*'
}



//Componente que contiene las rutas de la aplicación
// ```javascript
// // Componente que contiene las rutas de la aplicación
// // Utiliza `nameRoutes` para definir las rutas y los componentes asociados.
// // El componente `Routes` de `react-router-dom` se encarga de renderizar el componente
// // adecuado en función de la ruta a la que se acceda.
// const Rutas = () => (
//     <Routes>
//         <Route path={nameRoutes.WelcomePage} element={<WelcomePage />} />
//         <Route path={nameRoutes.RegistrarCitaPage} element={<RegistrarCitaPage />} />
//         <Route path={nameRoutes.VerCitasPage} element={<RegistrarCitaPage />} />
//         <Route path={nameRoutes.LoginPage} element={<LoginPage />} />
//         <Route path={nameRoutes.UserRegisterPage} element={<UserRegisterPage />} />
//         <Route path={nameRoutes.Error404Page} element={<Error404Page />} />
//     </Routes>
// );
// ```

const Rutas= ()=><Routes>
        <Route exact path={nameRoutes.WelcomePage} element={<WelcomePage />} />
        <Route exact path={nameRoutes.RegistrarCitaPage} element={<RegistrarCitaPage />} />
        <Route path={nameRoutes.VerCitasPage} element={<VerCitasPage />} />
        <Route exact path={nameRoutes.LoginPage} element={<LoginPage />} />
        <Route exact path={nameRoutes.UserRegisterPage} element={<UserRegisterPage />} />
        <Route exact path={nameRoutes.PolicyPage} element={<PolicyPage />} />
        <Route exact path={nameRoutes.TermsPage} element={<TermsPage />} />
        <Route path={nameRoutes.Error404Page} element={<Error404Page />} />

    </Routes>

export default Rutas
export {nameRoutes}