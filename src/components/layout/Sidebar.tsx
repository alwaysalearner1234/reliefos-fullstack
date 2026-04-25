
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  Sparkles
} from "lucide-react";
import { cn } from "../../utils/cn";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Users, label: "Audience", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export const Sidebar = ({ 
  mobileOpen, 
  setMobileOpen 
}: { 
  mobileOpen: boolean; 
  setMobileOpen: (v: boolean) => void;
}) => {
  const SidebarContent = (
    <div className="h-full flex flex-col p-4 w-64 glass-panel border-r border-slate-700/50 bg-slate-900/80">
      <div className="flex items-center gap-3 px-2 py-4 mb-6">
        <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center font-outfit font-bold text-white shadow-lg shadow-indigo-500/30">
          V
        </div>
        <span className="font-outfit font-bold text-xl tracking-wide text-white">Veridian</span>
      </div>

      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium",
              item.active 
                ? "bg-indigo-500/10 text-indigo-400" 
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            )}
          >
            <item.icon className={cn("w-5 h-5", item.active && "text-indigo-500")} />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Enterprise Ready Promotional Area */}
      <div className="mt-auto p-4 rounded-xl bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 blur-2xl rounded-full -mr-10 -mt-10 animate-pulse-slow" />
        <div className="relative z-10 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Enterprise Ready</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Scale your analytics with advanced permissions and SSO.
          </p>
          <button className="mt-2 w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-indigo-500/20">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-screen sticky top-0 shrink-0 z-20">
        {SidebarContent}
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 z-50 lg:hidden"
            >
              {SidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
