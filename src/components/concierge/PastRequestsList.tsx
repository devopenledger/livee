
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data
const pastRequests = [
  {
    id: 1,
    serviceType: "Luxury Cleaning",
    status: "Delivered",
    date: "2025-04-20",
    time: "14:00",
  },
  {
    id: 2,
    serviceType: "Property Maintenance",
    status: "Pending",
    date: "2025-04-25",
    time: "10:00",
  },
  {
    id: 3,
    serviceType: "Security Services",
    status: "Approved",
    date: "2025-04-27",
    time: "09:00",
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "delivered":
      return "bg-green-500";
    case "pending":
      return "bg-yellow-500";
    case "approved":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
};

export const PastRequestsList = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Service Type</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pastRequests.map((request) => (
          <TableRow key={request.id}>
            <TableCell className="font-medium">
              {request.serviceType}
            </TableCell>
            <TableCell>
              {request.date} at {request.time}
            </TableCell>
            <TableCell>
              <Badge className={getStatusColor(request.status)}>
                {request.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
