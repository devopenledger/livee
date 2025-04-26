
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { RentalAgreementsTable } from "@/components/admin/RentalAgreementsTable";

export default function RentalContractsManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Rental Contracts Management</h1>
      </div>

      <div className="flex gap-4 items-center">
        <Input
          placeholder="Search contracts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <RentalAgreementsTable searchQuery={searchQuery} />
    </div>
  );
}
