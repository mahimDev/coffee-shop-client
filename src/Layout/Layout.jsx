import { Outlet } from "react-router-dom";
import NavBer from "../Shared/NavBer/NavBer";

const Layout = () => {
    return (
        <div className="font-caveat">
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;