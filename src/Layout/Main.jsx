import { Outlet } from "react-router-dom";
import Nabvar from "../assets/Shared/Nabvar";
import Footer from "../assets/Shared/Footer";



const Main = () => {
    return (
        <div >
            <Nabvar></Nabvar>
            <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Main;