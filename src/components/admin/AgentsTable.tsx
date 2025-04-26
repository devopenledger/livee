
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, UserX } from "lucide-react";

type Agent = {
  id: string;
  name: string;
  company: string;
  totalSales: string;
  status: "Active" | "Pending Approval";
};

const mockAgents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "Dubai Elite Properties",
    totalSales: "AED 7,500,000",
    status: "Active"
  },
  {
    id: "2",
    name: "Omar Al Farooq",
    company: "Emaar Real Estate",
    totalSales: "AED 12,800,000",
    status: "Active"
  },
  {
    id: "3",
    name: "Priya Sharma",
    company: "Falcon Properties",
    totalSales: "AED 5,300,000",
    status: "Active"
  },
  {
    id: "4",
    name: "Michael Lawson",
    company: "Dubai Marina Estates",
    totalSales: "AED 8,750,000",
    status: "Active"
  },
  {
    id: "5",
    name: "Fatima Al Zahra",
    company: "Palm Jumeirah Realty",
    totalSales: "AED 0",
    status: "Pending Approval"
  },
  {
    id: "6",
    name: "John Chen",
    company: "Downtown Dubai Properties",
    totalSales: "AED 0",
    status: "Pending Approval"
  }
];

interface AgentsTableProps {
  searchQuery: string;
}

export function AgentsTable({ searchQuery }: AgentsTableProps) {
  const filteredAgents = mockAgents.filter(agent => 
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    agent.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Agent Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Total Sales</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAgents.map((agent) => (
            <TableRow key={agent.id}>
              <TableCell className="font-medium">{agent.name}</TableCell>
              <TableCell>{agent.company}</TableCell>
              <TableCell>{agent.totalSales}</TableCell>
              <TableCell>
                <Badge variant={agent.status === "Active" ? "success" : "outline"}>
                  {agent.status}
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
                    <UserX className="h-4 w-4" />
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
