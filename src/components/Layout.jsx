import { Outlet } from "react-router-dom";
import PageSwipe from "./PageSwipe/PageSwipe.jsx"

const Layout = () => {
    return (
        <PageSwipe>
            <main>
                <Outlet />
            </main>
        </PageSwipe>
    );
};

export default Layout;
