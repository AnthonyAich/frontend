import {useState} from 'react';
import {Link} from 'react-router-dom';

export interface INavBarProps {
}

// NavBarItem component
const NavBarItem = (page: string, index: any) => {
    return (
            <Link to={"/"+page} key={index} className="block mt-4 lg:inline-block lg:mt-0 lg:mr-10 sm:m-auto text-lg font-bold">
                {page}
            </Link>
    );
};

export function NavBar (props: INavBarProps) {
    const [navbarMobile, setnavbarMobile] = useState("hidden");
    
    const mobileNavbarClick = () => {
        if (navbarMobile === "block") {
            setnavbarMobile("hidden");
        } else {
            setnavbarMobile("block");
        }
    }
    //get all filenames in pages folder
    const pages: string[] = [
        'Home',
        'About',
        'Contact'
    ]
  return (
        <nav className="flex items-start justify-between flex-wrap pt-6 px-16 fixed w-full top-4 bg-background lg:bg-transparent  pb-10 rounded-lg">
            <div className="flex items-start">
                <Link to="/">
                    <span className="font-semibold text-2xl tracking-tight">anthoStudy</span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => {mobileNavbarClick()}} className="flex items-center px-3 py-2 border rounded border-black hover:border-black">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={`w-full lg:block ${navbarMobile} lg:flex lg:items-start lg:w-auto`}>
                <div className="text-sm lg:flex-grow ">
                    {
                        pages.map((page, index) => {
                            return NavBarItem(page, index);
                        })
                    }
                    <Link to="/login">
                        <button className="bg-primary w-32 hover:opacity-70 text-white py-2 px-4 rounded sm:m-auto text-lg font-bold">
                            Inloggen
                        </button>
                    </Link>
                </div>
            </div>

        </nav>
  );
}

