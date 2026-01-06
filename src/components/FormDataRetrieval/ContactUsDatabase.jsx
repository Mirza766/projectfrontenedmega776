import React from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import { Mail, Phone, User, MessageSquare, Tag, Calendar, ChevronRight } from 'lucide-react';

function ContactUsDatabase() {
  const { contactUser } = useAuth();

  if (!contactUser || contactUser.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-slate-500">
        <MessageSquare size={48} className="mb-4 opacity-20" />
        <p className="text-xl font-medium">No contact queries found</p>
      </div>
    );
  }

  return (
    <div className="mt-4 max-w-7xl mx-auto px-6 py-16 bg-slate-950 min-h-screen">
      <div className="mb-12">
        <h2 className="text-4xl font-black text-white tracking-tight mb-3">
          Contact <span className="text-blue-500">Queries</span>
        </h2>
        <p className="text-slate-400 text-lg">Manage and respond to user messages from the database.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {contactUser.map((query) => (
          <div key={query._id} className="group relative">
           
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full flex flex-col hover:border-slate-700 transition-colors">
              
             
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <Tag size={12} className="text-blue-400" />
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                    {query.queryType}
                  </span>
                </div>
                <span className="text-xs text-slate-600 font-mono">{query._id}</span>
              </div>

          
              <div className="grow mb-6">
                <div className="flex gap-3">
                  <MessageSquare size={18} className="text-slate-500 mt-1 shrink-0" />
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "{query.message}"
                  </p>
                </div>
              </div>

            
              <div className="space-y-3 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                    <User size={14} className="text-slate-400" />
                  </div>
                  <span className="text-sm font-semibold text-white">{query.fullName}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <Mail size={14} className="text-blue-500/60" />
                  <span className="text-xs truncate">{query.email}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <Phone size={14} className="text-blue-500/60" />
                  <span className="text-xs">{query.phoneNumber}</span>
                </div>
              </div>

     
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUsDatabase;