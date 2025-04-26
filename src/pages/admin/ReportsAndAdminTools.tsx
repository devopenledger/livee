
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Home, Package, Settings, Download } from "lucide-react";

export default function ReportsAndAdminTools() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reports & Admin Tools</h1>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Reports</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  User Reports
                </CardTitle>
                <CardDescription>
                  User registration and activity statistics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>User Registrations (Weekly)</span>
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>User Activity Report</span>
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>KYC Completion Report</span>
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="mr-2 h-5 w-5" />
                  Sales & Rental Reports
                </CardTitle>
                <CardDescription>
                  Property sales and rental performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>Monthly Sales Report</span>
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>Rental Performance</span>
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>Agent Commission Report</span>
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Marketplace Reports
                </CardTitle>
                <CardDescription>
                  Product sales and service bookings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>Product Sales Report</span>
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>Service Bookings</span>
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>Revenue Analysis</span>
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Admin Tools</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  System Configuration
                </CardTitle>
                <CardDescription>
                  Platform settings and configurations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full flex justify-between items-center">
                    <span>Payment Gateway Settings</span>
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button className="w-full flex justify-between items-center">
                    <span>Email Notification Settings</span>
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button className="w-full flex justify-between items-center">
                    <span>Platform Parameters</span>
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  System Logs
                </CardTitle>
                <CardDescription>
                  Access and review system logs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>Error Logs</span>
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>User Activity Logs</span>
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button className="w-full flex justify-between items-center" variant="outline">
                    <span>System Performance</span>
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
