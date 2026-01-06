import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../AuthContext/AuthContext';
import { 
  Ticket, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Film, 
  ChevronLeft,
  MapPin
} from 'lucide-react';

function AdminTicketsData() {
  const params = useParams();
  const { AuthorizationToken } = useAuth();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSingleTicketData = async () => {
    try {
      setLoading(true);
   
      const response = await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/admin/tickets/${params.id}`, {
        method: 'GET',
        headers: { Authorization: AuthorizationToken },
      });
      const data = await response.json();
      if (response.ok) {
        setTicket(data);
      }
    } catch (error) {
      toast.error("Error fetching ticket data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleTicketData();
  }, [params.id]);

  if (loading) return <div className="text-white p-10 text-center">Loading Ticket...</div>;
  if (!ticket) return <div className="text-white p-10 text-center">Ticket Not Found</div>;

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8 flex flex-col items-center">
     
      <div className="w-full max-w-4xl mb-6">
        <Link to="/admin/tickets" className="flex items-center text-slate-400 hover:text-blue-400 transition-colors">
          <ChevronLeft size={20} /> Back to Management
        </Link>
      </div>

      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        
       
        <div className="h-32 bg-linear-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 flex justify-center items-center">
                <Film size={120} strokeWidth={1} />
            </div>
            <div className="absolute bottom-4 left-6">
                <span className="bg-black/30 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                    Confirmed Booking
                </span>
                <h1 className="text-2xl font-black text-white uppercase tracking-tighter">
                    {ticket.movie}
                </h1>
            </div>
        </div>

   
        <div className="p-6 space-y-6 relative">
          
         
          <section>
            <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3">Customer Information</h3>
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-slate-800 rounded-full text-blue-400">
                <User size={18} />
              </div>
              <div>
                <p className="text-slate-100 font-semibold">{ticket.name}</p>
                <p className="text-slate-400 text-xs">{ticket.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="p-2 bg-slate-800 rounded-full text-blue-400">
                <Phone size={18} />
              </div>
              <p className="text-slate-300 text-sm">{ticket.phone}</p>
            </div>
          </section>

         
          <div className="relative h-px bg-slate-800 my-4">
             <div className="absolute -left-9 -top-3 w-6 h-6 bg-slate-950 rounded-full border-r border-slate-800"></div>
             <div className="absolute -right-9 -top-3 w-6 h-6 bg-slate-950 rounded-full border-l border-slate-800"></div>
          </div>

      
          <section className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-500">
                <Calendar size={14} />
                <span className="text-[10px] uppercase font-bold tracking-tighter">Show Date</span>
              </div>
              <p className="text-slate-100 font-mono text-sm">{ticket.date}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-500">
                <Clock size={14} />
                <span className="text-[10px] uppercase font-bold tracking-tighter">Screen Time</span>
              </div>
              <p className="text-slate-100 font-mono text-sm">{ticket.time}</p>
            </div>
          </section>

          <section className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
            <div className="flex items-center gap-2 text-slate-400 mb-3">
              <Ticket size={16} className="rotate-45" />
              <span className="text-xs font-bold uppercase tracking-widest">Reserved Seats</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {ticket.seats && ticket.seats.map((seat, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 text-blue-400 rounded-lg font-bold text-sm">
                  {seat}
                </span>
              ))}
            </div>
          </section>

       
          <div className="flex flex-col items-center pt-4 border-t border-slate-800 space-y-2">
              <div className="w-full h-12 bg-[repeating-linear-gradient(90deg,#1e293b,#1e293b_2px,transparent_2px,transparent_8px)] opacity-30"></div>
              <p className="text-[10px] font-mono text-slate-600 uppercase">Booking ID: {params.id}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminTicketsData;