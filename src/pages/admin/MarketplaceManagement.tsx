
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MarketplaceProductsTable } from "@/components/admin/MarketplaceProductsTable";
import { Plus } from "lucide-react";

export default function MarketplaceManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Marketplace Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <MarketplaceProductsTable searchQuery={searchQuery} />
    </div>
  );
}
