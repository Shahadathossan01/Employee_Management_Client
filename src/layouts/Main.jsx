import { Outlet } from "react-router-dom";
import Footer from "../components/share/Footer";
import Navbar from "../components/share/Navbar";

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Main;
