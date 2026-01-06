import React from 'react'
import { Outlet, NavLink, Link, Navigate, useNavigate } from 'react-router-dom'
import { Users, MessageSquare, Ticket, Phone, ShoppingBag, LayoutDashboard } from 'lucide-react'
import { useAuth } from '../../AuthContext/AuthContext';

function AdminLayout() {
  const activeLink = "flex items-center gap-3 px-4 py-3 bg-slate-800 text-blue-400 rounded-lg transition-all border-l-4 border-blue-500 shadow-lg shadow-blue-900/10";
  const normalLink = "flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 rounded-lg transition-all border-l-4 border-transparent group";

const {user,isLoading}=useAuth();


if(isLoading){
  return <h1>Loading.....</h1>
}


if(!user.isAdmin){
  return <Navigate to='/'/>
}

  return (
    <div className='p-2 max-w-8xl mx-auto '>
    <div className="max-w-8xl min-h-screen mx-auto mt-12 bg-slate-950 ">
      <div className="max-w-8xl mx-auto border rounded-lg  border-slate-300 relative flex">
        <aside className="sticky top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 z-50 shadow-2xl flex flex-col">
          <div className="p-5 mt-4">
            <h1 className="text-xl font-bold text-slate-100 tracking-tight uppercase flex items-center gap-2">
              <div className="p-1.5 bg-blue-600 rounded-md">
                <LayoutDashboard size={20} className="text-white" />
              </div>
              <span>Admin<span className="text-blue-500">Panel</span></span>
            </h1>
          </div>

          <nav className="flex-1 px-4 space-y-2 mt-2">
  
            <NavLink to='/admin/users' className={({ isActive }) => isActive ? activeLink : normalLink}>
              <Users size={20} /> <span className="font-medium">Users</span>
            </NavLink>
            <NavLink to='/admin/contacts' className={({ isActive }) => isActive ? activeLink : normalLink}>
              <MessageSquare size={20} /> <span className="font-medium">Contacts</span>
            </NavLink>
            <NavLink to='/admin/subscription' className={({ isActive }) => isActive ? activeLink : normalLink}>
              <ShoppingBag size={20} /> <span className="font-medium">Subscriptions</span>
            </NavLink>
            <NavLink to='/admin/tickets' className={({ isActive }) => isActive ? activeLink : normalLink}>
              <Ticket size={20} /> <span className="font-medium">Ticket Bookings</span>
            </NavLink>
            <NavLink to='/admin/callbookings' className={({ isActive }) => isActive ? activeLink : normalLink}>
              <Phone size={20} /> <span className="font-medium">Call Bookings</span>
            </NavLink>
            <NavLink to='/admin/orders' className={({ isActive }) => isActive ? activeLink : normalLink}>
              <ShoppingBag size={20} /> <span className="font-medium">Manage Orders</span>
            </NavLink>
          </nav>

          <div className="p-4 border-t border-slate-800 bg-slate-900/50">
            <div className="flex items-center gap-3 px-2 py-1">
              <div className="w-9 h-9 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-sm font-bold text-white uppercase">
                AD
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-200 leading-none">Admin User</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Super Admin</p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 min-h-screen flex flex-col border-r border-slate-800">
          <header className="h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40 flex items-center justify-between px-8">
            <div className="flex items-center gap-2 text-md font-medium text-slate-500">
              <span className="hover:text-blue-400 cursor-pointer">
                <Link to='/admin'>Dashboard</Link>
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="h-8 w-px bg-slate-800 mx-2"></div>
              <Link to='/logout' className="text-xs font-bold text-slate-400 hover:text-white transition-colors">
                LOGOUT
              </Link>
            </div>
          </header>

          <div className="p-8 flex-1">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
    </div>
  )
}

export default AdminLayout