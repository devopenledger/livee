
import { Wallet, Building, DollarSign } from "lucide-react";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { Card } from "@/components/ui/card";

export default function Portfolio() {
  const mockInvestments = [
    {
      id: 1,
      property: "Downtown Dubai Residences",
      tokensOwned: 50,
      valuePerToken: "AED 1,200",
      totalValue: "AED 60,000",
    },
    {
      id: 2,
      property: "Palm Jumeirah Villa Complex",
      tokensOwned: 75,
      valuePerToken: "AED 1,500",
      totalValue: "AED 112,500",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">My Investment Portfolio</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <KpiCard
          title="Total Portfolio Value"
          value="AED 172,500"
          icon={<Wallet className="h-4 w-4" />}
        />
        <KpiCard
          title="Properties Owned"
          value="2"
          icon={<Building className="h-4 w-4" />}
        />
        <KpiCard
          title="Monthly Returns"
          value="AED 2,156"
          icon={<DollarSign className="h-4 w-4" />}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      <div className="space-y-4">
        {mockInvestments.map((investment) => (
          <Card key={investment.id} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{investment.property}</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Tokens Owned</p>
                <p className="text-lg font-medium">{investment.tokensOwned}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Value per Token</p>
                <p className="text-lg font-medium">{investment.valuePerToken}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-lg font-medium">{investment.totalValue}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
