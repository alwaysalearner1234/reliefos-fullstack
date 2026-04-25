import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card } from "../ui/Card";
import { motion } from "framer-motion";

const data = [
  { time: "08:00", incidents: 2 },
  { time: "09:00", incidents: 5 },
  { time: "10:00", incidents: 14 },
  { time: "11:00", incidents: 9 },
  { time: "12:00", incidents: 12 },
  { time: "13:00", incidents: 18 },
  { time: "14:00", incidents: 7 },
];

export const IncidentChart = () => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
      <Card className="p-6 h-[400px] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-outfit font-semibold text-white">Incident Volume</h3>
            <p className="text-sm text-slate-400">Reports over the last 6 hours</p>
          </div>
        </div>
        
        <div className="flex-1 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis 
                dataKey="time" 
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
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem' }}
                itemStyle={{ color: '#e2e8f0' }}
              />
              <Area 
                type="monotone" 
                dataKey="incidents" 
                stroke="#3b82f6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorIncidents)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </motion.div>
  );
};
