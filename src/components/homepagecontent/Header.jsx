import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../stylingSheets/NavbarImg.css";
import { lazy } from "react";

import {
  ArrowBigDownDashIcon,
  ChevronDown,
  X,
  Menu,
  User,
  User2Icon,
  UserCheck2,
  Database,
  SubscriptIcon,
  BookIcon,
  SearchX,
  LoaderPinwheelIcon,
  BugPlayIcon,
  ShoppingCart,
  FileEditIcon,
  TimerIcon,
  LucideNewspaper,
  GitCompareIcon,
  Home,
} from "lucide-react";
const NavBarMenuModal = lazy(() => import("../../models/NavBarMenuModal"));
const SideBarMenuModel = lazy(() => import("../../models/SideBarMenuModel"));
const NavContentMenu = lazy(() => import("../../models/NavContentMenu"));
import { useAuth } from "../../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
function Header() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [openNavContent, setNavContent] = useState();
  const [openMenu, setOpenMenu] = useState();

const {user,isLoading,isLoggedIn}=useAuth();

  const closeMenuButton = () => setisOpen(false);
  const closeSideBar = () => setOpenSideBar(false);
  const closeNavContent = () => setNavContent(false);

  if(isLoading){
    return <h1>isLoading...</h1>
  }

const isAdmin = isLoggedIn && user && user.isAdmin;

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleCloseSideBarButton = (
    <button className="NavImg-btn" onClick={closeSideBar}>
      Close
    </button>
  );

  const handleCloseNavContent = (
    <button className="NavImg-btn" onClick={closeNavContent}>
      Close
    </button>
  );

  const handleCloseMenuButton = (
    <button className="NavImg-btn" onClick={closeMenuButton}>
      Close
    </button>
  );

  const mainMenu = (
    // className='nav-conten
    <NavBarMenuModal
      closeMenuButton={closeMenuButton}
      handleCloseMenuButton={handleCloseMenuButton}
    >
      <div
        className={`flex flex-col gap-1 border rounded-lg border-gray-400 p-1
    bg-slate-950/20 backdrop-blur-lg justify-left absolute right-0 top-18 w-34 ${isLoggedIn}?"h-20":"h-24" 
    items-center justify-center  text-green-400 sm:mb-8 animate-in slide-in-from-top duration-700 delay-200 `}
      >
        {isLoggedIn ? (
          <Link to="/logout">
            <p
              className="text-base  px-2 py-1 border-gray-400 hover:text-white"
              style={{ cursor: "pointer" }}
            >
              logout
            </p>
          </Link>
        ) : (
          <>
            <Link to="/signup">
              <p className="text-basepx-2 py-1 border-gray-400 hover:text-white">
                Sign/up
              </p>
            </Link>
            <Link to="/login">
              <p className=" text-base  px-2 py-1 border-gray-400 hover:text-white">
                login
              </p>
            </Link>
          </>
        )}
      </div>
    </NavBarMenuModal>
  );
  // sidebarlinkcontent
  const SidebarMenu = (
    <SideBarMenuModel
      handleCloseSideBarButton={handleCloseSideBarButton}
      closeSideBar={closeSideBar}
    >
      <div className="mx-auto text-left max-w-7xl animate-in slide-in-from-left duration-700 delay-200 flex flex-col space-y-4 px-4 py-5 w-48 text-sm sm:w-55 md:w-60 sm:text-base lg:text-lg lg:w-60 ">
        {
          user?.isAdmin? (
         <button className="text-left text-green-300 hover:text-white">
          <Link to="/admin">
            <div className="flex flex-row  items-center items-left  gap-2">
              <Home size={18} />
              <span className="text-md">Admin Panel</span>
            </div>
          </Link>
        </button>
          ):
          (
            null
          )
        }
         
        
        
        <button className="text-left text-green-300 hover:text-white">
          <Link to="/">
            <div className="flex flex-row  items-center items-left  gap-2">
              <Home size={18} />
              <span className="text-md">Home</span>
            </div>
          </Link>
        </button>

        <button
          className="text-left text-green-300 hover:text-white cursor-pointer"
          onClick={() => toggleMenu("Records")}
        >
          <div className="flex gap-4 items-center">
            <div className="flex flex-row  items-center gap-2 justify-center ">
              <Database size={18} />
              <span className="text-md md:text-md lg:text-lg">
                Record Section
              </span>
            </div>
            <div>
              <ChevronDown
                className={`  transition-transform delay-100 duration-300 ${
                  openMenu === "Records" ? "rotate-180" : ""
                }`}
                size={18}
              />
            </div>
          </div>
        </button>
        {openMenu === "Records" && (
          <div className="  pl-2 md:pl-3 lg:pl-4  text-xs flex flex-col gap-3 text-left text-green-300">
            <button className="cursor-pointer  hover:text-white">
              <Link to="/getSubsc">
                <div className="flex flex-row  items-center items-left  gap-2">
                  <SubscriptIcon size={18} />
                  <span className="text-sm md:text-md lg:text-lg">
                    Subscriptions
                  </span>
                </div>
              </Link>
            </button>

            <button className="cursor-pointer  hover:text-white">
              <Link to="/contactDatabase">
                <div className="flex flex-row  items-center items-left  gap-2">
                  <SearchX size={18} />
                  <span className="text-sm md:text-md lg:text-lg">
                    Your Queries
                  </span>
                </div>
              </Link>
            </button>

            <button className="cursor-pointer  hover:text-white">
              <Link to="/bookDataRetrieve">
                <div className="flex flex-row  items-center items-left  gap-2">
                  <BookIcon size={18} />
                  <span className="text-sm md:text-md lg:text-lg">
                    Bookings
                  </span>
                </div>
              </Link>
            </button>

            {/* <button className="cursor-pointer  hover:text-white">
              <Link to="/signUpPage">
                <div className="flex flex-row  items-center items-left  gap-2">
                  <LoaderPinwheelIcon size={18} />
                  <span className="text-sm md:text-md lg:text-lg">
                    Sign In Users
                  </span>
                </div>
              </Link>
            </button> */}

            <button className="cursor-pointer  hover:text-white">
              <Link to="/getorderconfirm">
                <div className="flex flex-row  items-center items-left  gap-2">
                  <ShoppingCart size={18} />
                  <span className="text-sm md:text-md lg:text-lg">Buyings</span>
                </div>
              </Link>
            </button>

               <button className="cursor-pointer  hover:text-white">
              <Link to="/getcallbooking">
                <div className="flex flex-row  items-center items-left  gap-2">
                  <ShoppingCart size={18} />
                  <span className="text-sm md:text-md lg:text-lg">Your Call bookings</span>
                </div>
              </Link>
            </button>
          </div>
        )}

        <button className="cursor-pointer text-green-300  hover:text-white">
          <Link to="/timeline">
            <div className="flex flex-row  items-center items-left  gap-2">
              <TimerIcon size={18} />
              <span className="text-md md:text-md lg:text-lg">Timeline</span>
            </div>
          </Link>
        </button>

        <button className="cursor-pointer text-green-300  hover:text-white">
          <Link to="/feedback">
            <div className="flex flex-row  items-center items-left  gap-2">
              <FileEditIcon size={18} />
              <span className="text-md md:text-md lg:text-lg">Feedback</span>
            </div>
          </Link>
        </button>

        <button className="cursor-pointer text-green-300  hover:text-white">
          <Link to="/story">
            <div className="flex flex-row  items-center items-left  gap-2">
              <LucideNewspaper size={18} />
              <span className="text-md md:text-md lg:text-lg">
                Current Story
              </span>
            </div>
          </Link>
        </button>

        <button className="cursor-pointer text-green-300  hover:text-white">
          <Link to="/contact">
            <div className="flex flex-row  items-center items-left  gap-2">
              <GitCompareIcon size={18} />
              <span className="text-md md:text-md lg:text-lg">
                Complain Section
              </span>
            </div>
          </Link>
        </button>

        <button className="cursor-pointer text-green-300  hover:text-white">
          <Link to="/search-movie">
            <div className="flex flex-row  items-center items-left  gap-2">
              <GitCompareIcon size={18} />
              <span className="text-md md:text-md lg:text-lg">
                Find a Movie
              </span>
            </div>
          </Link>
        </button>
      </div>
    </SideBarMenuModel>
  );

  // className='SidebarLink'
  const NavContentMenuTotal = (
    <NavContentMenu
      handleCloseNavContent={handleCloseNavContent}
      closeNavContent={closeNavContent}
    >
      <div className="  sidebarlinkcontent">
        <Link className="SidebarLink" to="/">
          Home
        </Link>
        <Link className="SidebarLink" to="/contact">
          Contact Us
        </Link>
        <Link className="SidebarLink" to="/about">
          About Us
        </Link>
      </div>
    </NavContentMenu>
  );

  return (
    <>
      {/* <div className='Navbar'>
    <div className='image'>
      < i onClick={()=>setOpenSideBar(true)} className="ri-menu-line"></i>
   <img style={{height:'80px', width:'100px'}} className='Navbar-logo' src='/images/christmas_2012_new_2861.jpg' alt='logoImage'/>
     {
      openSideBar && SidebarMenu
     }
    </div>
    <div className='container'>
     <div className='Navbar-Buttons'>
          <Link to='/'  className='Nav-btns img1'>Home</Link>
          <Link to='/about' className='Nav-btns img2'>About Us</Link>
          <Link to='/contact'  className='Nav-btns img3' >Contact Us</Link>
     </div>
     <div  className='responsive-sidebar-contact'>
      < i onClick={()=>setNavContent(true)} className="ri-arrow-left-down-box-fill"></i>
     {
      openNavContent && NavContentMenuTotal
     }
     </div>
     <div   className='sign-up-image'>
        <img onClick={()=>setisOpen(true)}  className='User-logo' style={{height:'40px' ,width:'40px',cursor:'pointer'}} src='/images/User-logo.png' />
     {
        isOpen && mainMenu
      }
     </div>
    </div>
  </div> */}
      <nav className="h-auto fixed top-0 w-full z-2000 transition-all duration-300 bg-slate-950/80 backdrop-blur-lg border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            {isLoggedIn && (
              <div
                className="cursor-pointer"
                onClick={() => setOpenSideBar((prev) => !prev)}
              >
                {openSideBar ? (
                  <X className="w-5 h-5 sm:h-7 sm:w-7 lg:h-8 lg:w-8  text-gray-400/80" />
                ) : (
                  <Menu className="w-5 h-5 sm:h-7 sm:w-7 lg:h-8 lg:w-8  text-gray-400/80" />
                )}
              </div>
            )}
            <img
              src="/logo.png"
              className="w-5 h-5 sm:h-7 sm:w-7 lg:h-8 lg:w-8 hover:scale-104 delay-200 duration-200 transition-all "
            />
            <p className="text-3xl sm:4xl md:5xl lg:6xl bg-linear-to-r from-blue-500/25 to-cyan-500 text-transparent bg-clip-text font-bold ">
              CineWave
            </p>
          </div>

          {isLoggedIn && (
            <div className="hidden md:flex space-x-4 mt-1">
              <Link
                to="/"
                className="text-green-300 hover:text-white text-sm lg:text-xl font-semibold"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-green-300 hover:text-white text-sm lg:text-xl  font-semibold"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-green-300 hover:text-white text-sm lg:text-xl  font-semibold"
              >
                Contact Us
              </Link>
            </div>
          )}

          <div className="flex flex-row space-x-2">
            {isLoggedIn && (
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setNavContent((prev) => !prev)}
            >
              {openNavContent ? (
                <X className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer" />
              ) : (
                <ArrowBigDownDashIcon className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer" />
              )}
            </button>
            )}
            <div
              onClick={() => setisOpen(true)}
              className="p-2 border border-gray-300 rounded-full bg-blue-500/20 text-blue-600
         hover:shadow-lg shadow-blue-400/20 hover:border-gray-400/30
        hover:-translate-y-1 transition-transform duration-300"
            >
              <User className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 cursor-pointer " />
            </div>
          </div>
        </div>
        {openNavContent && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-slate-800 duration-700 animate-in slide-in-from-top flex flex-col gap-2">
                {isLoggedIn && (
            <div className="flex flex-col px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 ">
              <Link
                to="/"
                className="text-green-300 hover:text-white text-sm lg:text-base"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-green-300 hover:text-white text-sm lg:text-base"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-green-300 hover:text-white text-sm lg:text-base"
              >
                Contact Us
              </Link>
 
            </div>
            )
               }
          </div>
        )}
      </nav>
      {isOpen && mainMenu}
      {openSideBar && SidebarMenu}
    </>
  );
}

export default Header;
