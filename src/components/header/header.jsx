import { useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "@/context/index";
import { GrLogout } from "react-icons/gr";
import Logo from '@/assets/logo.jpg';

const Header = () => {
  const [{ wishlist, cart }, dispatch] = useStateValue();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-30 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/wishlist" className="relative flex items-center text-[#253D4E] font-semibold hover:text-[#3BB77E] transition-colors">
            <CiHeart className="text-2xl" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
            <span className="ml-2">Wishlist</span>
          </NavLink>

          <button
            onClick={() => dispatch({ type: "LOGOUT" })}
            className="flex items-center text-[#253D4E] font-semibold hover:text-[#3BB77E] transition-colors"
          >
            <GrLogout className="text-xl" />
            <span className="ml-2">Logout</span>
          </button>
        </div>

        <button onClick={toggleMenu} className="lg:hidden text-2xl">
          <RiMenu2Fill />
        </button>

        {isMenuOpen && (
          <div className="lg:hidden flex flex-col items-center gap-6 mt-5">
            <NavLink to="/wishlist" className="flex items-center text-[#253D4E] font-semibold">
              <CiHeart className="text-2xl" />
              {wishlist.length > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
              Wishlist
            </NavLink>

            <button
              onClick={() => dispatch({ type: "LOGOUT" })}
              className="flex items-center text-[#253D4E] font-semibold"
            >
              <GrLogout className="text-xl" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
