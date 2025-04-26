
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, UserX } from "lucide-react";

type User = {
  id: string;
  name: string;
  email: string;
  role: "User" | "Agent" | "Admin" | "Developer";
  status: "Active" | "Inactive";
};

const mockUsers: User[] = [
  {
    id: "1",
    name: "Ahmed Al Maktoum",
    email: "ahmed.m@example.com",
    role: "User",
    status: "Active"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@property.ae",
    role: "Agent",
    status: "Active"
  },
  {
    id: "3",
    name: "Mohammed Hassan",
    email: "mohammed.h@example.com",
    role: "User",
    status: "Active"
  },
  {
    id: "4",
    name: "Alia Al Fahim",
    email: "alia.f@admin.livee.ae",
    role: "Admin",
    status: "Active"
  },
  {
    id: "5",
    name: "James Wilson",
    email: "j.wilson@developer.ae",
    role: "Developer",
    status: "Active"
  },
  {
    id: "6",
    name: "Fatima Al Mazrouei",
    email: "fatima.m@example.com",
    role: "User",
    status: "Inactive"
  }
];

interface UsersTableProps {
  searchQuery: string;
}

export function UsersTable({ searchQuery }: UsersTableProps) {
  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant={
                  user.role === "User" ? "outline" :
                  user.role === "Agent" ? "secondary" :
                  user.role === "Admin" ? "default" : "outline"
                }>
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={user.status === "Active" ? "success" : "destructive"}>
                  {user.status}
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
