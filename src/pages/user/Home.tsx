
import { BriefcaseIcon, BuildingIcon, HomeIcon } from "lucide-react";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const recentActivities = [
  {
    type: "investment",
    description: "Purchased 50 tokens of Dubai Downtown Plaza",
    date: "2025-04-25",
  },
  {
    type: "rental",
    description: "Booked Marina View Apartment for 3 months",
    date: "2025-04-23",
  },
  {
    type: "concierge",
    description: "Requested airport pickup service",
    date: "2025-04-20",
  },
];

const DashboardHome = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, John</h1>
        <p className="text-muted-foreground mt-1">
          Here's an overview of your portfolio
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <KpiCard
          title="Total Investment Value"
          value="$284,500"
          icon={<BriefcaseIcon className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 12.5, isPositive: true }}
        />
        <KpiCard
          title="Current Token Holdings"
          value="1,250 Tokens"
          icon={<BuildingIcon className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 5.2, isPositive: true }}
        />
        <KpiCard
          title="Active Rentals"
          value="2 Properties"
          icon={<HomeIcon className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Button asChild className="h-auto py-4">
          <Link to="/user/rent">
            <HomeIcon className="mr-2 h-5 w-5" />
            Rent a Property
          </Link>
        </Button>
        <Button asChild className="h-auto py-4">
          <Link to="/user/buy">
            <BriefcaseIcon className="mr-2 h-5 w-5" />
            Invest in Tokens
          </Link>
        </Button>
        <Button asChild className="h-auto py-4">
          <Link to="/user/concierge">
            <BuildingIcon className="mr-2 h-5 w-5" />
            Request Concierge
          </Link>
        </Button>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">{activity.description}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(activity.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
