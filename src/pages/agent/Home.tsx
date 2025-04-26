
import { Users, TrendingUp, FileText } from "lucide-react";
import { AgentKpiCard } from "@/components/agent/AgentKpiCard";
import { RecentActivityTable, Activity } from "@/components/agent/RecentActivityTable";

const mockActivities: Activity[] = [
  {
    id: "1",
    type: "sale",
    property: "Burj Khalifa Residences",
    client: "Mohammed Al Rashid",
    value: "AED 2,500,000",
    date: "2025-04-25"
  },
  {
    id: "2",
    type: "tokenization",
    property: "Dubai Marina View",
    client: "Sarah Johnson",
    value: "AED 1,200,000",
    date: "2025-04-24"
  },
  {
    id: "3",
    type: "sale",
    property: "Palm Jumeirah Villa",
    client: "Ahmed Hassan",
    value: "AED 5,800,000",
    date: "2025-04-23"
  }
];

export default function AgentHome() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome back, Sarah</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <AgentKpiCard
          title="Total Commissions Earned"
          value="AED 150,000"
          icon={TrendingUp}
          trend={{ value: 12, isPositive: true }}
        />
        <AgentKpiCard
          title="Active Clients"
          value="24"
          icon={Users}
        />
        <AgentKpiCard
          title="Pending Offers"
          value="8"
          icon={FileText}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recent Activity</h2>
        <RecentActivityTable activities={mockActivities} />
      </div>
    </div>
  );
}
