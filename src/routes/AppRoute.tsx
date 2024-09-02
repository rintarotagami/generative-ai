import {
    Route,
    Routes
} from "react-router-dom";
import Home from '@/pages/home';
import Generate from '@/pages/generate';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/generate' element={<Generate />} />
        </Routes>
    )
}

export default AppRoutes;