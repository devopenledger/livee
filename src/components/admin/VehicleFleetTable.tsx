
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, FileText } from "lucide-react";

type Vehicle = {
  id: string;
  vehicleName: string;
  model: string;
  tenant: string;
  leaseStatus: "Active" | "Available" | "Maintenance";
};

const mockVehicles: Vehicle[] = [
  {
    id: "1",
    vehicleName: "Mercedes S-Class",
    model: "2025 S500",
    tenant: "Ahmed Al Maktoum",
    leaseStatus: "Active"
  },
  {
    id: "2",
    vehicleName: "Range Rover Sport",
    model: "2024 HSE",
    tenant: "Fatima Al Zahra",
    leaseStatus: "Active"
  },
  {
    id: "3",
    vehicleName: "BMW 7 Series",
    model: "2025 740i",
    tenant: "James Wilson",
    leaseStatus: "Active"
  },
  {
    id: "4",
    vehicleName: "Bentley Bentayga",
    model: "2025",
    tenant: "",
    leaseStatus: "Available"
  },
  {
    id: "5",
    vehicleName: "Rolls-Royce Ghost",
    model: "2024",
    tenant: "",
    leaseStatus: "Maintenance"
  }
];

interface VehicleFleetTableProps {
  searchQuery: string;
}

export function VehicleFleetTable({ searchQuery }: VehicleFleetTableProps) {
  const filteredVehicles = mockVehicles.filter(vehicle => 
    vehicle.vehicleName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vehicle.tenant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Vehicle Name</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Assigned Tenant</TableHead>
            <TableHead>Lease Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredVehicles.map((vehicle) => (
            <TableRow key={vehicle.id}>
              <TableCell className="font-medium">{vehicle.vehicleName}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.tenant || "—"}</TableCell>
              <TableCell>
                <Badge variant={
                  vehicle.leaseStatus === "Active" ? "success" :
                  vehicle.leaseStatus === "Available" ? "outline" : "destructive"
                }>
                  {vehicle.leaseStatus}
                </Badge>
              </TableCell>
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
