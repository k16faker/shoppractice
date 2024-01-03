

import { Outlet } from "react-router-dom";
import MainNav from "../components/header/MainNav";


function RootPage():JSX.Element {
    return (
        <div>
            <MainNav />
            <Outlet />
        </div>
    );
};


export default RootPage;