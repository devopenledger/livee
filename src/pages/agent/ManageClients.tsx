
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ClientsTable } from "@/components/agent/ClientsTable";
import { ClientFilters } from "@/components/agent/ClientFilters";
import type { Client } from "@/components/agent/ClientsTable";

const mockClients: Client[] = [
  {
    id: "1",
    name: "Ahmed Al Maktoum",
    email: "ahmed.m@email.ae",
    phone: "+971 50 123 4567",
    status: "active",
    dateCreated: "2025-03-15"
  },
  {
    id: "2",
    name: "Sarah Al Hashimi",
    email: "sarah.h@email.ae",
    phone: "+971 54 987 6543",
    status: "prospect",
    dateCreated: "2025-04-01"
  },
  {
    id: "3",
    name: "James Wilson",
    email: "j.wilson@email.com",
    phone: "+971 55 456 7890",
    status: "active",
    dateCreated: "2025-04-10"
  }
];

export default function ManageClients() {
  const [clients] = useState<Client[]>(mockClients);

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Clients</h1>
      </div>
      
      <ClientFilters />
      <ClientsTable clients={clients} />
    </div>
  );
}
