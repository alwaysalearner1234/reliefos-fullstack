import { DashboardLayout } from "./components/layout/DashboardLayout";
import { KPICards } from "./components/dashboard/KPICards";
import { RevenueChart } from "./components/dashboard/RevenueChart";
import { SegmentChart } from "./components/dashboard/SegmentChart";
import { UserCategoriesChart } from "./components/dashboard/UserCategoriesChart";
import { ActivityFeed } from "./components/dashboard/ActivityFeed";

function App() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-2xl font-outfit font-bold text-white mb-1">Dashboard Overview</h1>
          <p className="text-slate-400 text-sm">Welcome back! Here's your analytics summary for today.</p>
        </div>
        
        <KPICards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <SegmentChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <UserCategoriesChart />
          </div>
          <div className="lg:col-span-2">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
