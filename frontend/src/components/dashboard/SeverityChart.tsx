import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";

export const SeverityChart = ({ stats }: { stats: any }) => {
  // Use real stats if available, otherwise fallback
  const data = stats ? [
    { name: "High", count: stats.high_severity, fill: "#ef4444" },
    { name: "Medium", count: Math.max(0, stats.active_crises - stats.high_severity), fill: "#f97316" },
    { name: "Low", count: stats.resolved_crises, fill: "#eab308" },
  ] : [
    { name: "High", count: 12, fill: "#ef4444" },
    { name: "Medium", count: 34, fill: "#f97316" },
    { name: "Low", count: 18, fill: "#eab308" },
  ];

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
      <Card className="p-6 h-[400px] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-outfit font-semibold text-white">Severity Breakdown</h3>
        </div>
        
        <div className="flex-1 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="#64748b" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#64748b" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem' }}
                itemStyle={{ color: '#e2e8f0' }}
                cursor={{ fill: '#334155', opacity: 0.4 }}
              />
              <Bar 
                dataKey="count" 
                radius={[4, 4, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </motion.div>
  );
};
