import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";

const data = [
  { name: "Enterprise", users: 1200 },
  { name: "SMB", users: 3000 },
  { name: "Startup", users: 2000 },
  { name: "Freelance", users: 1500 },
];

export const SegmentChart = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
      <Card className="h-[300px] flex flex-col">
        <h3 className="text-lg font-outfit font-semibold text-white mb-6">Segment Distribution</h3>
        <div className="flex-1 w-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{ fill: '#334155', opacity: 0.4 }}
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#f1f5f9' }}
                itemStyle={{ color: '#38bdf8' }}
              />
              <Bar 
                dataKey="users" 
                fill="#38bdf8" 
                radius={[4, 4, 0, 0]} 
                animationDuration={2000}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </motion.div>
  );
};
