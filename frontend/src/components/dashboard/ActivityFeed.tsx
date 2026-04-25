import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { cn } from "../../utils/cn";
import { AlertCircle } from "lucide-react";

interface Report {
  id: number;
  type: string;
  location: string;
  severity: string;
  status: string;
  timestamp: string;
}

const severityColors = {
  High: "text-red-400 bg-red-400/10 border-red-400/20",
  Medium: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Low: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
};

export const ActivityFeed = ({ reports }: { reports: Report[] }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
      <Card className="h-[400px] flex flex-col">
        <div className="flex justify-between items-center p-6 pb-2 border-b border-slate-700/50">
          <div>
            <h3 className="text-lg font-outfit font-semibold text-white">Recent Alerts</h3>
            <p className="text-xs text-slate-400">Incoming crisis reports</p>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {reports.length === 0 ? (
            <div className="h-full flex items-center justify-center text-slate-500">
              No recent activity
            </div>
          ) : (
            reports.map((report) => (
              <div key={report.id} className="flex items-start gap-4 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/80 transition-colors group cursor-default border border-slate-700/50">
                <div className={cn(
                  "mt-1 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow-lg", 
                  report.severity === 'High' ? "bg-red-500/20 text-red-400" : 
                  report.severity === 'Medium' ? "bg-orange-500/20 text-orange-400" : "bg-yellow-500/20 text-yellow-400"
                )}>
                  <AlertCircle className="w-4 h-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-semibold text-slate-200 truncate group-hover:text-white transition-colors">
                      {report.type}
                    </p>
                    <span className="text-xs text-slate-500 whitespace-nowrap ml-2">
                      {report.timestamp}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 truncate mb-2">
                    {report.location}
                  </p>
                  <div className="flex gap-2">
                    <span className={cn(
                      "text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border",
                      severityColors[report.severity as keyof typeof severityColors] || severityColors.Low
                    )}>
                      {report.severity}
                    </span>
                    <span className={cn(
                      "text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border",
                      report.status === 'Active' ? "text-blue-400 bg-blue-400/10 border-blue-400/20" : "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
                    )}>
                      {report.status}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Card>
    </motion.div>
  );
};
