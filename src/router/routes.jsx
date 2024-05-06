import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/welcome";




function Rutas() {
    return (<Routes>
        <Route path="/welcome" element={<Welcome />} />

        {/* Puedes agregar más rutas aquí */}
    </Routes>)
}


export default Rutas