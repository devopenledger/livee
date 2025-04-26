
import { useState } from "react";
import { TokenizationForm } from "@/components/agent/TokenizationForm";
import { TokenizationsTable } from "@/components/agent/TokenizationsTable";

export default function TokenizeProperties() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tokenize Properties</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TokenizationForm />
        <TokenizationsTable />
      </div>
    </div>
  );
}
