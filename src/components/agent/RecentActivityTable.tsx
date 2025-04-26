
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Activity {
  id: string;
  type: "sale" | "tokenization";
  property: string;
  client: string;
  value: string;
  date: string;
}

interface RecentActivityTableProps {
  activities: Activity[];
}

export const RecentActivityTable = ({ activities }: RecentActivityTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Property</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell className="capitalize">{activity.type}</TableCell>
              <TableCell>{activity.property}</TableCell>
              <TableCell>{activity.client}</TableCell>
              <TableCell>{activity.value}</TableCell>
              <TableCell>{activity.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
