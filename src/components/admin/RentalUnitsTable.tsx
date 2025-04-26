
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, FileText } from "lucide-react";

type RentalUnit = {
  id: string;
  unitName: string;
  property: string;
  tenant: string;
  leaseStatus: "Active" | "Terminated";
  endDate: string;
};

const mockRentalUnits: RentalUnit[] = [
  {
    id: "1",
    unitName: "Apt 2301",
    property: "Marina Towers",
    tenant: "Ahmed Al Maktoum",
    leaseStatus: "Active",
    endDate: "2026-05-15"
  },
  {
    id: "2",
    unitName: "Villa 42",
    property: "Arabian Ranches",
    tenant: "James Wilson",
    leaseStatus: "Active",
    endDate: "2026-08-20"
  },
  {
    id: "3",
    unitName: "Office 1801",
    property: "Business Bay Executive Tower",
    tenant: "Global Consulting LLC",
    leaseStatus: "Active",
    endDate: "2027-01-10"
  },
  {
    id: "4",
    unitName: "Apt 1205",
    property: "Downtown Views",
    tenant: "Sarah Johnson",
    leaseStatus: "Terminated",
    endDate: "2024-12-31"
  },
  {
    id: "5",
    unitName: "Penthouse 01",
    property: "Palm Jumeirah Residences",
    tenant: "Mohammed Hassan",
    leaseStatus: "Active",
    endDate: "2026-11-05"
  }
];

interface RentalUnitsTableProps {
  searchQuery: string;
}

export function RentalUnitsTable({ searchQuery }: RentalUnitsTableProps) {
  const filteredUnits = mockRentalUnits.filter(unit => 
    unit.unitName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    unit.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
    unit.tenant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Unit Name</TableHead>
            <TableHead>Property</TableHead>
            <TableHead>Tenant</TableHead>
            <TableHead>Lease Status</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUnits.map((unit) => (
            <TableRow key={unit.id}>
              <TableCell className="font-medium">{unit.unitName}</TableCell>
              <TableCell>{unit.property}</TableCell>
              <TableCell>{unit.tenant}</TableCell>
              <TableCell>
                <Badge variant={unit.leaseStatus === "Active" ? "success" : "destructive"}>
                  {unit.leaseStatus}
                </Badge>
              </TableCell>
              <TableCell>{new Date(unit.endDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
