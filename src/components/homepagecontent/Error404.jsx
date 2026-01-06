import React from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
const Error404 = () => {
  const {isLoggedIn}=useAuth();
  
  
    return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="relative">
        {/* Subtle background glow */}
        <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
        
        <h1 className="relative text-9xl font-black text-slate-100 tracking-tighter">
          404
        </h1>
      </div>

      <div className="mt-8 space-y-4 max-w-lg relative">
        <h2 className="text-3xl font-bold text-slate-200 sm:text-4xl">
          Page not found
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved, 
          deleted, or perhaps it never existed in this dimension.
        </p>
      </div>
{
isLoggedIn &&(

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="/"
          className="rounded-lg bg-slate-100 px-8 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-200 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100"
        >
          Go back home
        </a>
        <a
          href="/support"
          className="rounded-lg border border-slate-700 px-8 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-900 transition-all hover:border-slate-500"
        >
          Contact support <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
)
}

      <div className="mt-20">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
          Error Code: SEC_404_NOT_FOUND
        </p>
      </div>
    </div>
  );
};

export default Error404;