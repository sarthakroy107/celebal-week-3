"use client";
import { BarChart } from "@tremor/react";

const chartdata = [
  {
    date: "Oct 23",
    Duration: 16,
  },
  {
    date: "Nov 23",
    Duration: 12,
  },
  {
    date: "Dec 23",
    Duration: 15,
  },
  {
    date: "Jan 24",
    Duration: 16,
  },
  {
    date: "Feb 24",
    Duration: 15,
  },
  {
    date: "Mar 24",
    Duration: 12,
  },
  {
    date: "Apr 24",
    Duration: 16,
  },
  {
    date: "May 24",
    Duration: 12,
  },
  {
    date: "Jun 24",
    Duration: 13,
  },
];

export default function Page() {
  type CustomTooltipTypeBar = {
    payload: any;
    active: boolean | undefined;
    label: any;
  };

  const customTooltip = (props: CustomTooltipTypeBar) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-sm border border-black bg-white p-2 text-black dark:text-white shadow-sm">
        {payload.map((category: any, idx: number) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis">
                {category.value} minutes
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center mt-7">
      <div className="w-3/5">
        <BarChart
          className="mt-4 h-72"
          data={chartdata}
          index="date"
          categories={["Duration"]}
          colors={["blue"]}
          yAxisWidth={30}
          customTooltip={customTooltip}
        />
      </div>
    </div>
  );
}
