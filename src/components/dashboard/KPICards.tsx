import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, Users, CreditCard } from "lucide-react";
import { Card } from "../ui/Card";
import { cn } from "../../utils/cn";

const kpiData = [
  {
    title: "Total Revenue",
    value: "$124,500",
    trend: "+12.5%",
    isPositive: true,
    icon: DollarSign,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Growth",
    value: "24.8%",
    trend: "+4.2%",
    isPositive: true,
    icon: TrendingUp,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  {
    title: "Churn Rate",
    value: "2.4%",
    trend: "-0.8%",
    isPositive: true, // A decrease in churn is positive
    icon: Users,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Avg Ticket Size",
    value: "$450",
    trend: "-1.2%",
    isPositive: false,
    icon: CreditCard,
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export const KPICards = () => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
    >
      {kpiData.map((kpi, i) => (
        <motion.div key={i} variants={item}>
          <Card className="flex flex-col relative overflow-hidden group">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-3 rounded-xl", kpi.bg)}>
                <kpi.icon className={cn("w-6 h-6", kpi.color)} />
              </div>
              
              <div className={cn(
                "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
                kpi.isPositive ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10"
              )}>
                {kpi.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {kpi.trend}
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-400 text-sm font-medium">{kpi.title}</h3>
              <p className="text-3xl font-outfit font-bold text-white tracking-tight">{kpi.value}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};
