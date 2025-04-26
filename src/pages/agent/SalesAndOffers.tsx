
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SalesTable } from "@/components/agent/SalesTable";
import { Input } from "@/components/ui/input";
import { FileText, Eye, Edit, X } from "lucide-react";

export default function SalesAndOffers() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Sales & Offers</h1>
      </div>

      <div className="flex gap-4 items-center">
        <Input
          placeholder="Search properties or clients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <SalesTable />
    </div>
  );
}
