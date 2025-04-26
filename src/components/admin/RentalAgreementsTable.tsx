
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, FileText, Download } from "lucide-react";

type RentalAgreement = {
  id: string;
  property: string;
  tenant: string;
  duration: string;
  status: "Active" | "Expired" | "Terminated" | "Renewal";
  endDate: string;
};

const mockAgreements: RentalAgreement[] = [
  {
    id: "1",
    property: "Marina View Tower, Apt 2301",
    tenant: "Ahmed Al Maktoum",
    duration: "12 months",
    status: "Active",
    endDate: "2025-05-15"
  },
  {
    id: "2",
    property: "Downtown Views, Unit 1805",
    tenant: "Sarah Johnson",
    duration: "24 months",
    status: "Active",
    endDate: "2026-11-20"
  },
  {
    id: "3",
    property: "JLT Cluster X, Office 2104",
    tenant: "Global Ventures LLC",
    duration: "36 months",
    status: "Renewal",
    endDate: "2025-06-30"
  },
  {
    id: "4",
    property: "Arabian Ranches Villa 42",
    tenant: "James Wilson",
    duration: "12 months",
    status: "Expired",
    endDate: "2024-12-31"
  },
  {
    id: "5",
    property: "Business Bay Tower A, Office 1801",
    tenant: "Dubai Digital Consulting",
    duration: "24 months",
    status: "Terminated",
    endDate: "2023-09-20"
  }
];

interface RentalAgreementsTableProps {
  searchQuery: string;
}

export function RentalAgreementsTable({ searchQuery }: RentalAgreementsTableProps) {
  const filteredAgreements = mockAgreements.filter(agreement => 
    agreement.property.toLowerCase().includes(searchQuery.toLowerCase()) || 
    agreement.tenant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property</TableHead>
            <TableHead>Tenant</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAgreements.map((agreement) => (
            <TableRow key={agreement.id}>
              <TableCell className="font-medium">{agreement.property}</TableCell>
              <TableCell>{agreement.tenant}</TableCell>
              <TableCell>{agreement.duration}</TableCell>
              <TableCell>
                <Badge variant={
                  agreement.status === "Active" ? "success" :
                  agreement.status === "Expired" ? "secondary" :
                  agreement.status === "Terminated" ? "destructive" : "outline"
                }>
                  {agreement.status}
                </Badge>
              </TableCell>
              <TableCell>{new Date(agreement.endDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
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
