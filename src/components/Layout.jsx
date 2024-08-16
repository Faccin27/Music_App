import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex h-screen text-white">
            <Sidebar />
            <div className='flex flex-col flex-1'>
                <Navbar />
                <main className='flex-1 bg-black bg-opacity-60 p-4 ml-20 mt-16'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;