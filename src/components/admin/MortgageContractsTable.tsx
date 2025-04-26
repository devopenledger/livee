
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, FileText } from "lucide-react";

type MortgageContract = {
  id: string;
  property: string;
  buyer: string;
  financingAmount: string;
  status: "Ongoing" | "Completed" | "Pending";
  startDate: string;
};

const mockMortgages: MortgageContract[] = [
  {
    id: "1",
    property: "Marina View Tower, Apt 2301",
    buyer: "Ahmed Al Maktoum",
    financingAmount: "AED 2,500,000",
    status: "Ongoing",
    startDate: "2022-05-15"
  },
  {
    id: "2",
    property: "Downtown Views, Unit 1805",
    buyer: "Sarah Johnson",
    financingAmount: "AED 3,200,000",
    status: "Ongoing",
    startDate: "2021-11-20"
  },
  {
    id: "3",
    property: "Jumeirah Beach Residence, Unit 3102",
    buyer: "Mohammed Hassan",
    financingAmount: "AED 4,100,000",
    status: "Pending",
    startDate: "2025-05-01"
  },
  {
    id: "4",
    property: "Palm Jumeirah Villa 28",
    buyer: "James Wilson",
    financingAmount: "AED 8,500,000",
    status: "Completed",
    startDate: "2018-09-10"
  },
  {
    id: "5",
    property: "Business Bay Executive Tower B, Office 2201",
    buyer: "Global Ventures LLC",
    financingAmount: "AED 5,750,000",
    status: "Ongoing",
    startDate: "2023-03-15"
  }
];

interface MortgageContractsTableProps {
  searchQuery: string;
}

export function MortgageContractsTable({ searchQuery }: MortgageContractsTableProps) {
  const filteredMortgages = mockMortgages.filter(mortgage => 
    mortgage.property.toLowerCase().includes(searchQuery.toLowerCase()) || 
    mortgage.buyer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property</TableHead>
            <TableHead>Buyer Name</TableHead>
            <TableHead>Financing Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredMortgages.map((mortgage) => (
            <TableRow key={mortgage.id}>
              <TableCell className="font-medium">{mortgage.property}</TableCell>
              <TableCell>{mortgage.buyer}</TableCell>
              <TableCell>{mortgage.financingAmount}</TableCell>
              <TableCell>
                <Badge variant={
                  mortgage.status === "Ongoing" ? "success" :
                  mortgage.status === "Completed" ? "secondary" : "outline"
                }>
                  {mortgage.status}
                </Badge>
              </TableCell>
              <TableCell>{new Date(mortgage.startDate).toLocaleDateString()}</TableCell>
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
