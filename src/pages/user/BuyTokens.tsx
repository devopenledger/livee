
import { FileText, DollarSign } from "lucide-react";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { Card } from "@/components/ui/card";

export default function BuyTokens() {
  const mockTokens = [
    {
      id: 1,
      name: "Dubai Marina Towers",
      location: "Dubai Marina",
      totalValue: "AED 5,000,000",
      tokenPrice: "AED 1,000",
      availableTokens: 250,
    },
    {
      id: 2,
      name: "Business Bay Executive",
      location: "Business Bay",
      totalValue: "AED 3,500,000",
      tokenPrice: "AED 750",
      availableTokens: 180,
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Buy Tokenized Properties</h1>
      
      <div className="grid gap-4 md:grid-cols-2">
        <KpiCard
          title="Available Properties"
          value="15"
          icon={<FileText className="h-4 w-4" />}
        />
        <KpiCard
          title="Min. Investment"
          value="AED 1,000"
          icon={<DollarSign className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {mockTokens.map((token) => (
          <Card key={token.id} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{token.name}</h3>
            <p className="text-muted-foreground">{token.location}</p>
            <div className="mt-4 space-y-2">
              <p><span className="font-medium">Property Value:</span> {token.totalValue}</p>
              <p><span className="font-medium">Token Price:</span> {token.tokenPrice}</p>
              <p><span className="font-medium">Available Tokens:</span> {token.availableTokens}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
