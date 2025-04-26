
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PropertiesTable } from "@/components/admin/PropertiesTable";
import { Plus } from "lucide-react";

export default function PropertyManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Property Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <Input
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <PropertiesTable searchQuery={searchQuery} />
    </div>
  );
}
