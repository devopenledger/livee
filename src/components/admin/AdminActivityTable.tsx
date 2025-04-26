
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Activity = {
  id: string;
  type: "registration" | "sale" | "rental" | "tokenization";
  user: string;
  description: string;
  date: string;
};

const mockActivities: Activity[] = [
  {
    id: "1",
    type: "registration",
    user: "Ahmed Al Maktoum",
    description: "New user registered",
    date: "2025-04-26"
  },
  {
    id: "2",
    type: "sale",
    user: "Sarah Johnson",
    description: "Property sold: Dubai Marina View",
    date: "2025-04-25"
  },
  {
    id: "3",
    type: "rental",
    user: "Mohammed Hassan",
    description: "Unit rented: Business Bay Tower 4, Apt 1205",
    date: "2025-04-25"
  },
  {
    id: "4",
    type: "tokenization",
    user: "Alia Al Fahim",
    description: "Property tokenized: Downtown Views, 5000 tokens",
    date: "2025-04-24"
  },
  {
    id: "5",
    type: "registration",
    user: "James Wilson",
    description: "New agent registered",
    date: "2025-04-24"
  }
];

export function AdminActivityTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockActivities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell>
                <Badge variant={
                  activity.type === "registration" ? "outline" :
                  activity.type === "sale" ? "default" :
                  activity.type === "rental" ? "secondary" : "outline"
                }>
                  {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{activity.user}</TableCell>
              <TableCell>{activity.description}</TableCell>
              <TableCell>{new Date(activity.date).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
