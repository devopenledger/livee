
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { RentalUnitsTable } from "@/components/admin/RentalUnitsTable";

export default function UnitRentalsManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Unit Rentals Management</h1>
      </div>

      <div className="flex gap-4 items-center">
        <Input
          placeholder="Search rental units..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <RentalUnitsTable searchQuery={searchQuery} />
    </div>
  );
}
