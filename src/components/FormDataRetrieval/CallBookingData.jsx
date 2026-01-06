import React from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import { Calendar, UserCheck, User, Phone, Mail, Clock, Hash } from 'lucide-react';

function CallBookingData() {
  const { bookedCallData } = useAuth();

  if (!bookedCallData || bookedCallData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-slate-400 text-lg animate-pulse">No scheduled calls found...</p>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-7xl mx-auto px-6 py-12 bg-slate-950 min-h-screen">
      <div className="flex flex-col mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Upcoming Consultations</h2>
        <p className="text-slate-400">View and manage your scheduled sessions with our agents.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookedCallData.map((booking, index) => (
          <div key={booking._id || index} className="group relative">

            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-6 overflow-hidden">
              

              <div className="flex items-center gap-4 mb-6 p-3 bg-blue-500/5 rounded-xl border border-blue-500/10">
                <Calendar className="text-blue-400" size={24} />
                <div>
                  <p className="text-[10px] text-blue-400 uppercase font-bold tracking-widest">Appointment Slot</p>
                  <p className="text-white font-semibold text-sm">{booking.SelectedSlot}</p>
                </div>
              </div>


              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                    <UserCheck className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Professional Agent</p>
                    <p className="text-white font-bold text-lg">{booking.agentName}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                    <User className="text-slate-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Client</p>
                    <p className="text-slate-200 font-semibold">{booking.client}</p>
                  </div>
                </div>
              </div>


              <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200">
                  <Mail size={16} className="text-blue-500/70" />
                  <span className="text-xs">{booking.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200">
                  <Phone size={16} className="text-blue-500/70" />
                  <span className="text-xs">{booking.phone}</span>
                </div>
              </div>


          
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CallBookingData;