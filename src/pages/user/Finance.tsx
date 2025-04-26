
import { BanknoteIcon, Building } from "lucide-react";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { Card } from "@/components/ui/card";

export default function Finance() {
  const mockOptions = [
    {
      id: 1,
      name: "Halal Mortgage Plan A",
      description: "Fixed rate Islamic financing for residential properties",
      rate: "3.99%",
      term: "25 years",
      minFinancing: "AED 500,000",
    },
    {
      id: 2,
      name: "Halal Mortgage Plan B",
      description: "Flexible Islamic financing with profit rate review every 5 years",
      rate: "3.75%",
      term: "20 years",
      minFinancing: "AED 750,000",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Property Financing</h1>
      
      <div className="grid gap-4 md:grid-cols-2">
        <KpiCard
          title="Min. Down Payment"
          value="20%"
          icon={<BanknoteIcon className="h-4 w-4" />}
        />
        <KpiCard
          title="Available Properties"
          value="45"
          icon={<Building className="h-4 w-4" />}
        />
      </div>

      <div className="space-y-4">
        {mockOptions.map((option) => (
          <Card key={option.id} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
            <p className="text-muted-foreground mb-4">{option.description}</p>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Profit Rate</p>
                <p className="text-lg font-medium">{option.rate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Maximum Term</p>
                <p className="text-lg font-medium">{option.term}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Minimum Financing</p>
                <p className="text-lg font-medium">{option.minFinancing}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
