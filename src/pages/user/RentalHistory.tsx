
import { Calendar } from "lucide-react";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { Card } from "@/components/ui/card";

export default function RentalHistory() {
  const mockRentals = [
    {
      id: 1,
      property: "Marina Promenade Apartment",
      period: "Jan 2025 - Dec 2025",
      monthlyRent: "AED 12,000",
      status: "Active",
    },
    {
      id: 2,
      property: "JLT Luxury Studio",
      period: "Jun 2024 - Dec 2024",
      monthlyRent: "AED 8,500",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Rental History</h1>
      
      <div className="grid gap-4 md:grid-cols-2">
        <KpiCard
          title="Total Rentals"
          value="2"
          icon={<Calendar className="h-4 w-4" />}
        />
      </div>

      <div className="space-y-4">
        {mockRentals.map((rental) => (
          <Card key={rental.id} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{rental.property}</h3>
                <p className="text-muted-foreground">{rental.period}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                rental.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {rental.status}
              </span>
            </div>
            <div className="mt-4">
              <p><span className="font-medium">Monthly Rent:</span> {rental.monthlyRent}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
