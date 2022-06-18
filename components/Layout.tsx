import { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import SideNavbar from './SideNavbar';
import ThemeToggle from './ThemeToggle';

type LayoutProps = {
    children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <div>
            <div className="fixed right-0 p-4 lg:block hidden">
                <ThemeToggle />
            </div>
            <div className="lg:block hidden">
                <SideNavbar />
            </div>
            <div className="flex flex-col items-center">{children}</div>
        </div>
    );
};

export default Layout;
