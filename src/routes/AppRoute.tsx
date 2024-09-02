import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from '../pages/home';
import Generate from '../pages/generate';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/generate' element={<Generate />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;