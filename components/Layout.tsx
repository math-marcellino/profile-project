import {FunctionComponent, ReactNode} from 'react';
import Head from 'next/head';
import SideNavbar from "./SideNavbar";
import ThemeToggle from "./ThemeToggle";

type LayoutProps = {
    children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({
    children
}) => {
    return(
        <div>
            <div className='fixed right-0 p-4'>
                <ThemeToggle/>
            </div>
            <SideNavbar />
            {children}
        </div>
    )
}

export default Layout;