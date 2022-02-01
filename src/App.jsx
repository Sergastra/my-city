import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from './pages/Main';
import { Attractions } from './pages/Attractions';
import { Photo } from './pages/Photo';
import { History } from './pages/History';
import { NotFound } from './pages/NotFound';
import { Navbar } from './pages/compon/Navbar';




function App() {
    return (
        <>
            <Navbar />
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
  