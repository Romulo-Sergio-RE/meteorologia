import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataApiProvider } from "../context/dataApiContext";
import { HomePage } from "../pages/homePage/index";

export const Rota = () =>{
    return(
        <BrowserRouter>
            <DataApiProvider>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                </Routes>
            </DataApiProvider>
        </BrowserRouter>
    )
}