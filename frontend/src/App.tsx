import { useState, useEffect } from "react";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { KPICards } from "./components/dashboard/KPICards";
import { CrisisHeatmap } from "./components/dashboard/CrisisHeatmap";
import { ActivityFeed } from "./components/dashboard/ActivityFeed";
import { IncidentChart } from "./components/dashboard/IncidentChart";
import { SeverityChart } from "./components/dashboard/SeverityChart";
import { StatusChart } from "./components/dashboard/StatusChart";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";

function App() {
  const [reports, setReports] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reportsRes, statsRes] = await Promise.all([
          fetch('http://127.0.0.1:5000/api/reports'),
          fetch('http://127.0.0.1:5000/api/stats')
        ]);
        
        if (reportsRes.ok && statsRes.ok) {
          setReports(await reportsRes.json());
          setStats(await statsRes.json());
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    // In a real app we'd poll or use websockets
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-2xl font-outfit font-bold text-white mb-1">Live Disaster Feed</h1>
          <p className="text-slate-400 text-sm">Real-time alerts and crisis management overview.</p>
        </div>
        
        {loading ? (
          <div className="h-64"><LoadingSpinner /></div>
        ) : (
          <>
            <KPICards stats={stats} />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <CrisisHeatmap reports={reports} />
              <div className="lg:col-span-1">
                <ActivityFeed reports={reports} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <IncidentChart />
              </div>
              <div className="lg:col-span-1">
                <SeverityChart stats={stats} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <StatusChart stats={stats} />
              </div>
              <div className="lg:col-span-2">
                {/* Additional content could go here in a real application */}
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default App;
