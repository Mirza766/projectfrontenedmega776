import React from 'react';
import { useAuth } from '../../AuthContext/AuthContext';

import { User, Mail, Phone, CreditCard } from 'lucide-react';

function GetSubscriptionDatabase() {
  const { subscData } = useAuth();

  if (!subscData || subscData.length === 0) {
    return <div className="p-8 text-center text-slate-500">No subscriptions found.</div>;
  }


  return (
    <div className="mt-10 min-h-screen bg-slate-950 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-400 mb-8">Subscriptions</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscData.map((sub, index) => (
            <div 
              key={index} 
              className="group hover:shadow-3xl hover:shadow-blue-500 bg-slate-850/50 rounded-3xl shadow-sm border border-slate-200 overflow-hidden  transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(79,70,229,0.2)]"
            >
     
              <div className="bg-slate-900 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-slate-400 text-xs font-bold uppercase tracking-widest">Plan Type</h2>
                    <p className="text-2xl font-semibold mt-1">{sub.planName}</p>
                  </div>
                  <div className="bg-slate-800 p-2 rounded-lg">
                    <CreditCard size={20} className="text-slate-300" />
                  </div>
                </div>
              </div>

     
              <div className="px-6 py-4 bg-slate-900 border-b border-slate-100 flex justify-between items-center">
                <span className="text-slate-500 font-medium">Monthly Cost</span>
                <span className="text-2xl font-bold text-slate-900">{sub.price}</span>
              </div>

        
              <div className=" bg-slate-900 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <User size={18} className="text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Subscriber</p>
                    <p className="text-slate-700 font-medium">{sub.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-slate-400" />
                  <p className="text-slate-600 text-sm">{sub.email}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-slate-400" />
                  <p className="text-slate-600 text-sm">{sub.phoneNumber}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetSubscriptionDatabase;