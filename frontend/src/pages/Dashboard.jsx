import "./Dashboard.css";

import SummaryCards from "../components/SummaryCards";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";

function Dashboard({ equipment }) {
  return (
    <>
      <h1 className="dashboard-title">Dashboard</h1>

      <SummaryCards equipment={equipment} />
      <div className="dashboard-bottom">
        <RecentActivity />
        <QuickActions />
      </div>
    </>
  );
}

export default Dashboard;