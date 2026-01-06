import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../AuthContext/AuthContext';
import { 
  ShoppingBag, 
  User, 
  Mail, 
  ChevronLeft,
  Calendar,
  CreditCard,
  Receipt,
  Film,
  Tag
} from 'lucide-react';

function AdminOrdersUpdate() {
  const params = useParams();
  const { AuthorizationToken } = useAuth();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSingleOrderData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://megaprojectmoviebookingapp-1.onrender.com/api/admin/orders/${params.id}`, {
        method: 'GET',
        headers: { Authorization: AuthorizationToken },
      });
      const data = await response.json();
      if (response.ok) {
        setOrder(data);
      }
    } catch (error) {
      toast.error("Error fetching order data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleOrderData();
  }, [params.id]);

  if (loading) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
    </div>
  );

  if (!order) return <div className="text-white p-10 text-center">Order Not Found</div>;

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8 flex flex-col items-center">
      
      {/* Navigation */}
      <div className="w-full max-w-2xl mb-6">
        <Link to="/admin/orders" className="flex items-center text-slate-400 hover:text-blue-400 transition-colors font-medium">
          <ChevronLeft size={20} /> Back to Orders
        </Link>
      </div>

      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden">
        
        {/* Header: Order Info */}
        <div className="bg-slate-800/50 p-8 border-b border-slate-800">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2 text-blue-400">
                <ShoppingBag size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">Order Summary</span>
              </div>
              <h1 className="text-2xl font-black text-white uppercase tracking-tight">Invoice</h1>
              <p className="text-slate-500 font-mono text-xs mt-1">ID: {order._id}</p>
            </div>
            <div className="text-right">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Date Created</p>
              <div className="flex items-center gap-2 text-slate-200 text-sm font-mono">
                <Calendar size={14} className="text-blue-500" />
                {new Date(order.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          
          {/* Customer Section */}
          <section className="bg-slate-950/50 p-5 rounded-3xl border border-slate-800">
            <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <User size={12} /> Customer Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-white font-bold">{order.name}</p>
                <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
                  <Mail size={12} /> {order.email}
                </div>
              </div>
              <div className="md:text-right font-mono text-[10px] text-slate-600">
                USER_ID: {order.userId}
              </div>
            </div>
          </section>

          {/* Items Section */}
          <section>
            <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Film size={12} /> Purchased Content
            </h3>
            <div className="space-y-3">
              {order.items && order.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-800/30 p-3 rounded-2xl border border-slate-800/50 group hover:bg-slate-800/60 transition-colors">
                  <img 
                    src={item.poster_url} 
                    alt={item.title} 
                    className="w-16 h-20 object-cover rounded-xl shadow-lg border border-slate-700" 
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-sm tracking-tight">{item.title}</h4>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[9px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded uppercase font-bold">{item.age_rating}</span>
                      <span className="text-[9px] text-slate-500 font-medium italic">{item.language} • {item.release_year}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-400 font-mono font-bold text-sm">${item.price}</p>
                    <p className="text-[10px] text-slate-600">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative">
           
            <div className="absolute -left-11 top-0 w-6 h-6 bg-slate-950 rounded-full border-r border-slate-800"></div>
            <div className="absolute -right-11 top-0 w-6 h-6 bg-slate-950 rounded-full border-l border-slate-800"></div>
            
            <div className="border-t border-dashed border-slate-800 pt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Subtotal</span>
                <span className="text-slate-300 font-mono">${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Tax</span>
                <span className="text-slate-300 font-mono">${order.tax.toFixed(2)}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-500 font-medium flex items-center gap-1">
                    <Tag size={12} /> Discount
                  </span>
                  <span className="text-emerald-500 font-mono">-${order.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                <span className="text-white font-black uppercase tracking-widest text-xs">Final Total</span>
                <span className="text-2xl font-black text-blue-500 font-mono">
                  ${order.finalTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </section>

          {/* Payment Footer */}
          <div className="flex flex-col items-center pt-4 space-y-4">
             <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
                <CreditCard size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Paid via Digital Wallet</span>
             </div>
             <p className="text-[9px] text-slate-600 text-center font-medium leading-relaxed max-w-[250px]">
               A receipt has been sent to the customer's email. This transaction is protected by end-to-end encryption.
             </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminOrdersUpdate;