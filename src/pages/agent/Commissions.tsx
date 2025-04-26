
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockCommissions = [
  {
    id: "1",
    client: "Mohammed Al Rashid",
    property: "Burj Khalifa Residences",
    saleValue: "AED 2,500,000",
    commission: "AED 75,000",
    status: "paid"
  },
  {
    id: "2",
    client: "Sarah Johnson",
    property: "Dubai Marina View",
    saleValue: "AED 1,200,000",
    commission: "AED 36,000",
    status: "pending"
  }
];

export default function Commissions() {
  const [filter, setFilter] = useState("all");

  const filteredCommissions = filter === "all" 
    ? mockCommissions
    : mockCommissions.filter(commission => commission.status === filter);

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Commissions</h1>
        
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border p-2"
        >
          <option value="all">All</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Sale Value</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCommissions.map((commission) => (
              <TableRow key={commission.id}>
                <TableCell>{commission.client}</TableCell>
                <TableCell>{commission.property}</TableCell>
                <TableCell>{commission.saleValue}</TableCell>
                <TableCell>{commission.commission}</TableCell>
                <TableCell className="capitalize">{commission.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
