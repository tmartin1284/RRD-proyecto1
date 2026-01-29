import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacion from "./components/Navegacion";
import Pokemons from "./pages/Pokemons";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import DetallePokemon from "./pages/DetallePokemon";
import Error from "./pages/Error";
import Tomas from "./pages/Tomas";
import Txupito from "./pages/Txupito";
import { Outlet } from "react-router-dom";
import Navegacion2 from "./components/Navegacion2";
import "./App.css";
import PokeError from "./pages/PokeError";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navegacion2 />
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />}>
            <Route path="tomas" element={<Tomas />} />
            <Route path="txupito" element={<Txupito />} />
          </Route>
          <Route path="/pokemons" element={<Outlet />}>
            <Route index element={<Pokemons />} />
            <Route path=":pokemonId" element={<DetallePokemon />} />
          </Route>
          <Route path="/pokeerror/:error" element={<PokeError />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Navegacion />
      </BrowserRouter>
    </>
  );
}
