
import { DollarSign, FileText, Users } from "lucide-react";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { Card } from "@/components/ui/card";

export default function SalesManagement() {
  const mockSales = [
    {
      id: 1,
      property: "Marina Heights Tower",
      client: "Abdullah Al Mansoori",
      value: "AED 2,800,000",
      status: "Completed",
      date: "2025-04-20",
    },
    {
      id: 2,
      property: "Downtown Views",
      client: "Sarah Williams",
      value: "AED 3,500,000",
      status: "Pending",
      date: "2025-04-25",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Sales Management</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <KpiCard
          title="Total Sales Value"
          value="AED 6,300,000"
          icon={<DollarSign className="h-4 w-4" />}
          trend={{ value: 15, isPositive: true }}
        />
        <KpiCard
          title="Active Listings"
          value="28"
          icon={<FileText className="h-4 w-4" />}
        />
        <KpiCard
          title="Active Clients"
          value="45"
          icon={<Users className="h-4 w-4" />}
        />
      </div>

      <div className="space-y-4">
        {mockSales.map((sale) => (
          <Card key={sale.id} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{sale.property}</h3>
                <p className="text-muted-foreground">Client: {sale.client}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                sale.status === 'Completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {sale.status}
              </span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="font-medium">Value: {sale.value}</p>
              <p className="text-sm text-muted-foreground">Date: {sale.date}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
