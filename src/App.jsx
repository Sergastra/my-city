import { Routes, Route, Link } from "react-router-dom";

import { Main } from './pages/Main';
import { Attractions } from './pages/Attractions';
import { Photo } from './pages/Photo';
import { History } from './pages/History';
import { NotFound } from './pages/NotFound';





function App() {
    return (
        <>
            <header>
                <Link to="/"> Main </Link>
                <Link to="/attractions"> Attractions </Link>
                <Link to="/photo"> Photo </Link>
                <Link to="/history"> History </Link>
            </header>




            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/attractions" element={<Attractions />} />
                <Route path="/photo" element={<Photo />} />
                <Route path="/history" element={<History />} />
                <Route path="*" element={<NotFound />} />
            </Routes>


        </>
    );
}

export default App;
  