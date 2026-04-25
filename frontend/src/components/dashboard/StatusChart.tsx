import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend } from "recharts";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";

export const StatusChart = ({ stats }: { stats: any }) => {
  const data = stats ? [
    { name: "Active", value: stats.active_crises },
    { name: "Resolved", value: stats.resolved_crises },
  ] : [
    { name: "Active", value: 65 },
    { name: "Resolved", value: 35 },
  ];

  const COLORS = ['#3b82f6', '#10b981'];

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
      <Card className="p-6 h-[400px] flex flex-col">
        <h3 className="text-lg font-outfit font-semibold text-white mb-2">Status Distribution</h3>
        
        <div className="flex-1 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem' }}
                itemStyle={{ color: '#e2e8f0' }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value) => <span className="text-slate-300">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </motion.div>
  );
};
