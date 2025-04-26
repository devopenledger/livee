
import { Users, Home, FileText } from "lucide-react";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { AdminActivityTable } from "@/components/admin/AdminActivityTable";

export default function AdminHome() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome, Admin</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <KpiCard
          title="Total Users"
          value="1,243"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <KpiCard
          title="Active Rentals"
          value="876"
          icon={Home}
          trend={{ value: 12, isPositive: true }}
        />
        <KpiCard
          title="Tokens Issued"
          value="156,240"
          icon={FileText}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recent Activity</h2>
        <AdminActivityTable />
      </div>
    </div>
  );
}
