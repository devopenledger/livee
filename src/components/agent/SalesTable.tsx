
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Edit, X } from "lucide-react";

interface Sale {
  id: string;
  property: string;
  client: string;
  amount: string;
  status: "pending" | "accepted" | "rejected";
  date: string;
}

const mockSales: Sale[] = [
  {
    id: "1",
    property: "Burj Khalifa Residences #4502",
    client: "Mohammed Al Rashid",
    amount: "AED 4,500,000",
    status: "pending",
    date: "2025-04-25"
  },
  {
    id: "2",
    property: "Palm Jumeirah Villa #23",
    client: "Sarah Johnson",
    amount: "AED 12,000,000",
    status: "accepted",
    date: "2025-04-24"
  },
  {
    id: "3",
    property: "Dubai Marina Penthouse",
    client: "Ahmed Hassan",
    amount: "AED 8,200,000",
    status: "rejected",
    date: "2025-04-23"
  }
];

export const SalesTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockSales.map((sale) => (
            <TableRow key={sale.id}>
              <TableCell>{sale.property}</TableCell>
              <TableCell>{sale.client}</TableCell>
              <TableCell>{sale.amount}</TableCell>
              <TableCell>
                <span className={`inline-block px-2 py-1 rounded text-sm ${
                  sale.status === 'accepted' ? 'bg-green-100 text-green-800' :
                  sale.status === 'rejected' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {sale.status.charAt(0).toUpperCase() + sale.status.slice(1)}
                </span>
              </TableCell>
              <TableCell>{new Date(sale.date).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
