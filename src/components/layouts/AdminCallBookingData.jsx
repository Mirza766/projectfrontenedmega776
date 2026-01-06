import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../AuthContext/AuthContext';
import { 
  CalendarDays, 
  User, 
  Mail, 
  Phone, 
  ChevronLeft,
  Hash,
  Video,
  Headset,
  ArrowRightLeft
} from 'lucide-react';

function AdminCallBookingData() {
  const params = useParams();
  const { AuthorizationToken } = useAuth();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSingleCallBookingData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/admin/callbookings/${params.id}`, {
        method: 'GET',
        headers: { Authorization: AuthorizationToken },
      });
      const data = await response.json();
      if (response.ok) {
        setTicket(data);
      }
    } catch (error) {
      toast.error("Error fetching booking data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleCallBookingData();
  }, [params.id]);

  if (loading) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="animate-pulse text-blue-400 font-mono tracking-widest text-xs">DECRYPTING SESSION DATA...</div>
    </div>
  );

  if (!ticket) return <div className="text-white p-10 text-center font-mono">Session record not found.</div>;

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-12 flex flex-col items-center">
      
      {/* Back Link */}
      <div className="w-full max-w-lg mb-8">
        <Link to="/admin/callbookings" className="group flex items-center text-slate-500 hover:text-blue-400 transition-all text-xs font-bold uppercase tracking-widest">
          <ChevronLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> 
          Back to Sessions
        </Link>
      </div>

     
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden">
        
  
        <div className="h-1.5 w-full bg-slate-800 relative">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-500 animate-pulse"></div>
        </div>

        <div className="p-8 space-y-8">
          
         
          <div className="flex justify-between items-center">
            <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Virtual Session</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
                <Hash size={12} />
                <span className="text-[10px] font-mono uppercase font-bold tracking-tighter">REF-{params.id.slice(-6).toUpperCase()}</span>
            </div>
          </div>

         
          <div className="relative flex flex-col gap-6">
       
            <div className="absolute left-6 top-10 bottom-10 w-px bg-slate-800 border-l border-dashed border-slate-700"></div>

         
            <div className="flex items-start gap-4 z-10">
              <div className="h-12 w-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shadow-xl">
                <User size={20} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Client / Requester</p>
                <h2 className="text-xl font-black text-white tracking-tight">{ticket.client}</h2>
               
              </div>
            </div>

            
            <div className="ml-4 h-5 w-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center z-20 text-slate-600">
                <ArrowRightLeft size={10} />
            </div>

         
            <div className="flex items-start gap-4 z-10">
              <div className="h-12 w-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Headset size={20} />
              </div>
              <div>
                <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-widest mb-1">Assigned Agent</p>
                <h2 className="text-xl font-black text-slate-200 tracking-tight">{ticket.agentName}</h2>
                 <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded-md border border-white/5"><Mail size={10} /> {ticket.email}</span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded-md border border-white/5"><Phone size={10} /> {ticket.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slot Highlight: The "Ticket" Part */}
          <div className="relative p-6 rounded-xl bg-linear-to-br from-slate-800/40 to-slate-900 border border-white/5 overflow-hidden">
             {/* Decorative Circles for Ticket Look */}
             <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 rounded-full border-r border-slate-800"></div>
             <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 rounded-full border-l border-slate-800"></div>
             
             <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 mb-3 border border-blue-500/20">
                    <CalendarDays size={20} />
                </div>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-2">Reserved Time Slot</p>
                <p className="text-lg font-mono font-bold text-white tracking-tighter">
                    {ticket.SelectedSlot}
                </p>
             </div>
          </div>

          {/* System Footer */}
          <div className="pt-6 border-t border-slate-800/50 flex flex-col items-center gap-4">
            <div className="flex gap-1.5 opacity-20">
                {[...Array(24)].map((_, i) => (
                    <div key={i} className={`h-6 w-0.5 bg-slate-400 ${i % 4 === 0 ? 'h-8' : ''}`} />
                ))}
            </div>
            <div className="text-center space-y-1">
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">User Identity Verification</p>
                <p className="text-[9px] font-mono text-slate-700 break-all">{ticket.userId}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Action (Optional) */}
      <button 
        onClick={() => window.print()}
        className="mt-8 px-6 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400 text-xs font-bold hover:bg-slate-800 hover:text-white transition-all shadow-lg"
      >
        Export PDF Receipt
      </button>
    </div>
  );
}

export default AdminCallBookingData;