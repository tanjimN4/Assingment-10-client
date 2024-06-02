
import { Outlet } from "react-router-dom";
import Navebar from "./component/Navebar";

import Footer from "./component/Footer";

const Home = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;