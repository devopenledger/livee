
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Tokenization {
  id: string;
  property: string;
  status: "pending" | "approved" | "rejected";
  tokensCreated: number;
  date: string;
}

const mockTokenizations: Tokenization[] = [
  {
    id: "1",
    property: "Burj Khalifa Residences #4502",
    status: "pending",
    tokensCreated: 1000,
    date: "2025-04-25"
  },
  {
    id: "2",
    property: "Dubai Marina View Tower",
    status: "approved",
    tokensCreated: 500,
    date: "2025-04-24"
  },
  {
    id: "3",
    property: "Palm Jumeirah Villa",
    status: "rejected",
    tokensCreated: 2000,
    date: "2025-04-23"
  }
];

export const TokenizationsTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Existing Tokenizations</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Tokens</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTokenizations.map((token) => (
              <TableRow key={token.id}>
                <TableCell>{token.property}</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-1 rounded text-sm ${
                    token.status === 'approved' ? 'bg-green-100 text-green-800' :
                    token.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {token.status.charAt(0).toUpperCase() + token.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>{token.tokensCreated.toLocaleString()}</TableCell>
                <TableCell>{new Date(token.date).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
