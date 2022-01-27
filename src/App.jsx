import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from './pages/Main';
import { Attractions } from './pages/Attractions';
import { Photo } from './pages/Photo';
import { History } from './pages/History';
import { NotFound } from './pages/NotFound';





function App() {
    return (
        <>
            <header id="header">
                <Link to="/"> Главная </Link>
                <Link to="attractions"> Достопримечательности </Link>
                <Link to="photo"> Фотографии </Link>
                <Link to="history"> История </Link>
            </header>




            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="attractions" element={<Attractions />} />
                <Route path="photo" element={<Photo />} />
                <Route path="history" element={<History />} />
                <Route path="*" element={<NotFound />} />
            </Routes>


        </>
    );
}

export default App;
  