"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TOrder = {
  id: string;
  customerName: string;
  email: string;
  amount: number;
  status: "Delivered" | "Pending" | "In transite";
};

export default function Pgae() {
  const {} = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel<TOrder>(),
  });

  return (
    <main className="w-full  flex flex-col items-center">
      <div className="flex gap-x-5 mb-7 mt-12">
        <Card className="sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>Welcome back!</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Find your next order below or create a new one to get started.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Create New Order</Button>
          </CardFooter>
        </Card>
        <Card className="lg:w-52">
          <CardHeader>
            <CardDescription>Items shipped</CardDescription>
            <CardTitle className="text-3xl">72</CardTitle>
          </CardHeader>
          <CardFooter className="flex flex-col gap-y-3">
            <p className="text-xs text-black/60 dark:text-white w-full px-1 text-start">
              +19% from last month
            </p>
            <Progress value={36} />
          </CardFooter>
        </Card>
        <Card className="lg:w-52">
          <CardHeader>
            <CardDescription>Estimated profit</CardDescription>
            <CardTitle className="text-3xl">₹44789</CardTitle>
          </CardHeader>
          <CardFooter className="flex flex-col gap-y-3">
            <p className="text-xs text-black/60 dark:text-white w-full px-1 text-start">
              +4% from last month
            </p>
            <Progress value={44} />
          </CardFooter>
        </Card>
        <Card className="lg:w-64">
          <CardHeader>
            <CardDescription>Active users in 1 week</CardDescription>
            <CardTitle className="text-3xl">992</CardTitle>
            <p className="text-xs text-rose-500/60 w-full px-1 text-star">
              -3% from last week
            </p>
          </CardHeader>
          <CardFooter className="flex flex-col gap-y-2">
            <p className="text-sm text-black/60 dark:text-white w-full px-1 text-start">
              Sign ups in 24 hours: 3
            </p>
          </CardFooter>
        </Card>
      </div>
      <div className="w-[70%]">
        <Table className="w-full">
          <TableCaption>End of data</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Sl No</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.customerName}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      data.status === "Delivered"
                        ? "default"
                        : data.status === "Pending"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {data.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

const data: TOrder[] = [
  {
    id: "1",
    customerName: "John Doe",
    amount: 1000,
    status: "Pending",
    email: "a@gmail.com",
  },
  {
    id: "2",
    customerName: "Jane Doe",
    amount: 2000,
    status: "Delivered",
    email: "b@gmail.com",
  },
  {
    id: "3",
    customerName: "John Doe",
    amount: 3000,
    status: "Pending",
    email: "c@gmail.com",
  },
  {
    id: "4",
    customerName: "Jane Doe",
    amount: 4000,
    status: "Delivered",
    email: "d@gmail.com",
  },
  {
    id: "5",
    customerName: "John Doe",
    amount: 5000,
    status: "In transite",
    email: "e@gmail.com",
  },
  {
    id: "6",
    customerName: "Jane Doe",
    amount: 6000,
    status: "Delivered",
    email: "f@gmail.com",
  },
  {
    id: "7",
    customerName: "John Doe",
    amount: 7000,
    status: "In transite",
    email: "g@gmail.com",
  },
  {
    id: "8",
    customerName: "Jane Doe",
    amount: 8000,
    status: "Delivered",
    email: "h@gmail.com",
  },
  {
    id: "9",
    customerName: "John Doe",
    amount: 9000,
    status: "Pending",
    email: "i@gmail.com",
  },
  {
    id: "10",
    customerName: "Jane Doe",
    amount: 10000,
    status: "Delivered",
    email: "j@gmail.com",
  },
  {
    id: "11",
    customerName: "John Doe",
    amount: 11000,
    status: "Pending",
    email: "k@gmail.com",
  },
  {
    id: "12",
    customerName: "Jane Doe",
    amount: 12000,
    status: "Delivered",
    email: "l@gmail.com",
  },
  {
    id: "13",
    customerName: "John Doe",
    amount: 13000,
    status: "Pending",
    email: "m@gmail.com",
  },
  {
    id: "14",
    customerName: "Jane Doe",
    amount: 14000,
    status: "Delivered",
    email: "n@gmail.com",
  },
  {
    id: "15",
    customerName: "John Doe",
    amount: 15000,
    status: "Pending",
    email: "o@gmail.com",
  },
];

const columns: ColumnDef<TOrder>[] = [
  {
    header: "Sl No",
    accessorKey: "id",
  },
  {
    header: "Order ID",
    accessorKey: "id",
  },
  {
    header: "Customer Name",
    accessorKey: "customerName",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
];
