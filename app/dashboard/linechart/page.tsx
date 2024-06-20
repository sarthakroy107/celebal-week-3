"use client";
import { LineChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 24",
    Sales: 3490,
    Profit: 1338,
  },
  {
    date: "Feb 24",
    Sales: 2756,
    Profit: 1103,
  },
  {
    date: "Mar 24",
    Sales: 3322,
    Profit: 994,
  },
  {
    date: "Apr 24",
    Sales: 3470,
    Profit: 1708,
  },
  {
    date: "May 24",
    Sales: 3475,
    Profit: 1812,
  },
  {
    date: "Jun 24",
    Sales: 3129,
    Profit: 1726,
  },
  {
    date: "Jul 24",
    Sales: 3490,
    Profit: 1982,
  },
  {
    date: "Aug 24",
    Sales: 2903,
    Profit: 2012,
  },
  {
    date: "Sep 24",
    Sales: 2643,
    Profit: 1442,
  },
  {
    date: "Oct 24",
    Sales: 2837,
    Profit: 1273,
  },
  {
    date: "Nov 24",
    Sales: 2954,
    Profit: 1648,
  },
  {
    date: "Dec 24",
    Sales: 3239,
    Profit: 2036,
  },
];

const dataFormatter = (number: number) =>
  `₹${Intl.NumberFormat("us").format(number).toString()}`;

export default function Page() {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-3/5">
        <LineChart
          className="h-80"
          data={chartdata}
          index="date"
          categories={["Sales", "Profit"]}
          colors={["indigo", "red"]}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
          onValueChange={(v) => console.log(v)}
        />
      </div>
    </div>
  );
}
