import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { cn } from "../../utils/cn";

const activities = [
  { id: 1, user: "Alex Mercer", initials: "AM", action: "Upgraded to Enterprise", time: "2 mins ago", status: "success", amount: "$499.00" },
  { id: 2, user: "Sarah Jenkins", initials: "SJ", action: "Payment processing", time: "15 mins ago", status: "pending", amount: "$49.00" },
  { id: 3, user: "TechCorp Inc", initials: "TI", action: "Subscription renewal failed", time: "1 hour ago", status: "failed", amount: "$199.00" },
  { id: 4, user: "David Chen", initials: "DC", action: "New subscription started", time: "3 hours ago", status: "success", amount: "$29.00" },
  { id: 5, user: "Elena Rodriguez", initials: "ER", action: "Upgraded to Pro", time: "5 hours ago", status: "success", amount: "$99.00" },
];

const statusColors = {
  success: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  pending: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  failed: "text-rose-400 bg-rose-400/10 border-rose-400/20",
};

const bgColors = [
  "bg-indigo-500", "bg-purple-500", "bg-pink-500", "bg-blue-500", "bg-emerald-500"
];

export const ActivityFeed = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
      <Card className="h-[400px] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-outfit font-semibold text-white">Recent Activity</h3>
          <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            View All
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
          {activities.map((activity, index) => (
            <div key={activity.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-colors group cursor-default">
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg", bgColors[index % bgColors.length])}>
                {activity.initials}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-200 truncate group-hover:text-white transition-colors">
                  {activity.user}
                </p>
                <p className="text-xs text-slate-400 truncate">
                  {activity.action}
                </p>
              </div>
              
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-200 mb-1">{activity.amount}</p>
                <span className={cn(
                  "text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border",
                  statusColors[activity.status as keyof typeof statusColors]
                )}>
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
