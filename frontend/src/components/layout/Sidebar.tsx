import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Map, 
  FileText, 
  Settings, 
  Radio
} from "lucide-react";
import { cn } from "../../utils/cn";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Live Feed", active: true },
  { icon: Map, label: "Crisis Heatmap", active: false },
  { icon: FileText, label: "All Reports", active: false },
  { icon: Settings, label: "System Config", active: false },
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
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
          <Radio className="w-5 h-5 text-white animate-pulse" />
        </div>
        <span className="font-outfit font-bold text-xl tracking-wide text-white">Relief<span className="text-blue-400">OS</span></span>
      </div>

      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium",
              item.active 
                ? "bg-blue-500/10 text-blue-400" 
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            )}
          >
            <item.icon className={cn("w-5 h-5", item.active && "text-blue-500")} />
            {item.label}
          </button>
        ))}
      </nav>

      {/* System Status Area */}
      <div className="mt-auto p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 relative overflow-hidden group">
        <div className="relative z-10 flex flex-col gap-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Node Status</span>
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-white font-medium text-sm">
            <span>Primary Dispatch</span>
          </div>
          <p className="text-xs text-slate-500">
            Connected to emergency net.
          </p>
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
