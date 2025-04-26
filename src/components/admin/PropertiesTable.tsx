
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash } from "lucide-react";

type Property = {
  id: string;
  name: string;
  location: string;
  owner: string;
  status: "Active" | "Sold" | "Rented";
};

const mockProperties: Property[] = [
  {
    id: "1",
    name: "Burj Khalifa Residence #4502",
    location: "Downtown Dubai",
    owner: "Emaar Properties",
    status: "Active"
  },
  {
    id: "2",
    name: "Marina View Tower 3, Apt 1205",
    location: "Dubai Marina",
    owner: "Dubai Properties",
    status: "Rented"
  },
  {
    id: "3",
    name: "Palm Jumeirah Villa 42",
    location: "Palm Jumeirah",
    owner: "Nakheel",
    status: "Sold"
  },
  {
    id: "4",
    name: "Business Bay Executive Tower A - Office 1801",
    location: "Business Bay",
    owner: "DAMAC Properties",
    status: "Active"
  },
  {
    id: "5",
    name: "JLT Cluster N - Unit 3405",
    location: "Jumeirah Lake Towers",
    owner: "DMCC",
    status: "Active"
  },
  {
    id: "6",
    name: "Arabian Ranches Villa 78",
    location: "Arabian Ranches",
    owner: "Emaar Properties",
    status: "Sold"
  }
];

interface PropertiesTableProps {
  searchQuery: string;
}

export function PropertiesTable({ searchQuery }: PropertiesTableProps) {
  const filteredProperties = mockProperties.filter(property => 
    property.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Owner/Developer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProperties.map((property) => (
            <TableRow key={property.id}>
              <TableCell className="font-medium">{property.name}</TableCell>
              <TableCell>{property.location}</TableCell>
              <TableCell>{property.owner}</TableCell>
              <TableCell>
                <Badge variant={
                  property.status === "Active" ? "success" :
                  property.status === "Sold" ? "default" : "secondary"
                }>
                  {property.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash className="h-4 w-4" />
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
