import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePagespoke } from '../components/HomePage/HomePage'
import PokedexPage from '../components/Pages/PokedexPage'
import DetailsPage from '../components/Pages/PokemonDetail'


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePagespoke />} />
                <Route path='/pokedex' element={<PokedexPage />} />
                <Route path="/details/:name" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router