import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Flame, Activity } from "lucide-react";
import { Card } from "../ui/Card";
import { cn } from "../../utils/cn";

export const KPICards = ({ stats }: { stats: any }) => {
  if (!stats) return null;

  const kpiData = [
    {
      title: "Total Reports",
      value: stats.total_reports,
      icon: Activity,
      trend: "+12%",
      trendUp: true,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Active Crises",
      value: stats.active_crises,
      icon: AlertTriangle,
      trend: "+5%",
      trendUp: true,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20"
    },
    {
      title: "High Severity",
      value: stats.high_severity,
      icon: Flame,
      trend: "-2%",
      trendUp: false,
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "border-red-500/20"
    },
    {
      title: "Resolved",
      value: stats.resolved_crises,
      icon: CheckCircle,
      trend: "+18%",
      trendUp: true,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {kpiData.map((kpi, index) => (
        <motion.div key={index} variants={item}>
          <Card className={cn("p-6 flex flex-col justify-between h-full border-t-2", kpi.border)}>
            <div className="flex justify-between items-start">
              <p className="text-slate-400 text-sm font-sans">{kpi.title}</p>
              <div className={cn("p-2 rounded-lg", kpi.bg)}>
                <kpi.icon className={cn("w-5 h-5", kpi.color)} />
              </div>
            </div>
            
            <div className="mt-4 flex items-end justify-between">
              <h2 className="text-3xl font-outfit font-bold text-white">
                {kpi.value}
              </h2>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};
