import { FunctionComponent, ReactNode } from 'react';
import SideNavbar from './SideNavbar';
import BottomNavbar from './BottomNavbar';
import ThemeToggle from './ThemeToggle';

type LayoutProps = {
    children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <div className='pb-14 lg:pb-0'>
            <div className="fixed right-0 p-4 lg:block hidden">
                <ThemeToggle />
            </div>
            <div className="lg:block hidden">
                <SideNavbar />
            </div>
            <div className='lg:hidden'>
                <BottomNavbar />
            </div>
            <div className="flex flex-col items-center">{children}</div>
        </div>
    );
};

export default Layout;
