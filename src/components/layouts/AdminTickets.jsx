import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import { UserPen, Trash2, Loader2 } from 'lucide-react'; 
import { toast } from 'react-toastify';

function AdminTickets() {
  const { AuthorizationToken,user} = useAuth();
  const [usersData, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllTicketsData = async () => {
  
    try {
      setLoading(true);
      const response = await fetch('https://megaprojectmoviebookingapp-1.onrender.com/api/admin/tickets', {
        method: 'GET',
        headers: { Authorization: AuthorizationToken },
      });

      if (response.ok) {
        const res_data = await response.json();
        const finalData = Array.isArray(res_data) ? res_data : (res_data.users || res_data.msg || []);
        setUsers(finalData);
  
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const DeleteTicket = async (id) => {
   
      const response = await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/admin/tickets/delete/${id}`, {
        method: 'DELETE',
        headers: { Authorization: AuthorizationToken },
      });

      if (response.ok) {
        toast.success(`Ticket ${id} Deleted SuccessFully`)
        getAllTicketsData();
      }
      else{
        toast.error("User not deleted")
      }
    
  };

  useEffect(() => {
    getAllTicketsData();
  }, []);

 return (
  
    <div className="w-full max-w-full overflow-hidden px-1">
      
  
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Tickets Management</h2>
          <p className="text-slate-400 text-sm">Review, edit, or remove registered tickets.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm text-slate-300 self-start md:self-center">
          Total Tickets: <span className="text-blue-400 font-bold">{usersData.length}</span>
        </div>
      </div>

     
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        

        <div className="overflow-x-auto w-full">
          
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-800/50 border-b border-slate-800">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">User ID</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Username</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Email Address</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Movie</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Phone</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-2 text-slate-500">
                      <Loader2 className="animate-spin text-blue-500" size={32} />
                      <p className="italic text-sm">Fetching data...</p>
                    </div>
                  </td>
                </tr>
              ) : usersData.length > 0 ? (
                usersData.map((curUser, index) => (
                  <tr key={index} className="hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                     
                      <span className="text-slate-200 font-mono text-xs block max-w-[100px] truncate" title={curUser._id}>
                        {curUser._id}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-400">{curUser.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-400">{curUser.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-400">{curUser.movie || "N/A"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-400">{curUser.phone || "N/A"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end gap-3">
                        <Link 
                          to={`/admin/tickets/${curUser._id}/edit`}
                          className="p-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-all"
                        >
                          <UserPen size={18} />
                        </Link>
                        <button 
                          onClick={() => DeleteTicket(curUser._id)}
                          className="p-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-slate-500">
                    No Tickets found in the database.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminTickets;