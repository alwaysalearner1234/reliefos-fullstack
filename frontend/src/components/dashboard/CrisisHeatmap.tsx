import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { MapPin, AlertTriangle } from "lucide-react";

interface Report {
  id: number;
  type: string;
  location: string;
  severity: string;
  status: string;
}

export const CrisisHeatmap = ({ reports }: { reports: Report[] }) => {
  return (
    <Card className="col-span-1 lg:col-span-2 overflow-hidden flex flex-col h-[400px]">
      <div className="flex items-center justify-between p-6 pb-2 border-b border-slate-700/50">
        <div>
          <h3 className="font-outfit font-semibold text-lg text-white">Live Crisis Heatmap</h3>
          <p className="text-sm text-slate-400 font-sans">Geographic distribution of active alerts</p>
        </div>
        <MapPin className="w-5 h-5 text-indigo-400" />
      </div>
      
      <div className="flex-1 relative bg-slate-900/50 p-6 flex flex-col items-center justify-center overflow-hidden">
        {/* Placeholder for an actual map */}
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain opacity-20 filter invert"></div>
        
        {reports.length === 0 ? (
          <div className="z-10 text-slate-400 flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-2 opacity-50" />
            <p>No active alerts to display</p>
          </div>
        ) : (
          <div className="z-10 w-full h-full relative">
            {reports.map((report, i) => {
              // Just randomizing positions for demonstration since we don't have lat/long
              const top = 20 + (i * 25) % 60;
              const left = 20 + (i * 35) % 60;
              
              const severityColor = 
                report.severity === 'High' ? 'bg-red-500' :
                report.severity === 'Medium' ? 'bg-orange-500' : 'bg-yellow-500';

              return (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="absolute flex flex-col items-center group cursor-pointer"
                  style={{ top: `${top}%`, left: `${left}%` }}
                >
                  <div className={`relative flex items-center justify-center w-6 h-6 rounded-full ${severityColor} shadow-[0_0_15px_rgba(239,68,68,0.5)]`}>
                    <AlertTriangle className="w-3 h-3 text-white" />
                    <span className="absolute inline-flex h-full w-full rounded-full bg-inherit opacity-50 animate-ping"></span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:block w-32 bg-slate-800 text-xs rounded p-2 border border-slate-700 shadow-xl z-20">
                    <p className="font-bold text-white truncate">{report.location}</p>
                    <p className="text-slate-300">{report.type}</p>
                    <p className={`mt-1 font-semibold ${report.severity === 'High' ? 'text-red-400' : 'text-orange-400'}`}>
                      {report.severity} Priority
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
};
