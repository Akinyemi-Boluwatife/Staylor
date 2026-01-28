"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useRentals } from "../Rentals/useRentals";
import { formatCurrency } from "../../utils/helpers";
import { eachMonthOfInterval, subMonths, format, isSameMonth } from "date-fns";
import Loader from "../ui/Loader";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function DashboardRatingChart() {
  const { rentals, isLoading } = useRentals(180);

  const chartData = React.useMemo(() => {
    if (!rentals) return [];

    const today = new Date();
    // 6 months including current month
    const start = subMonths(today, 5);

    const months = eachMonthOfInterval({
      start: start,
      end: today,
    });

    return months.map((monthDate) => {
      const dateStr = format(monthDate, "MMM yyyy");

      // Filter rentals created in this specific month
      const monthlyRevenue = rentals.reduce((acc, rental) => {
        const rentalDate = new Date(rental.createdAt);
        if (isSameMonth(rentalDate, monthDate)) {
          return acc + rental.totalAmount;
        }
        return acc;
      }, 0);

      return {
        date: dateStr,
        revenue: monthlyRevenue,
      };
    });
  }, [rentals]);

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "var(--chart-1)",
    },
  };

  if (isLoading) return <Loader />;

  return (
    <Card className="flex flex-col shadow-lg md:col-span-2">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Rental Revenue</CardTitle>
        <CardDescription>
          Monthly revenue over the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid
              vertical={true}
              strokeDasharray=""
              stroke="var(--ring)"
              opacity={0.8}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value}
              className="text-xs text-muted-foreground"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
              className="text-xs text-muted-foreground"
              width={40}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="revenue"
                  labelFormatter={(value) => value}
                  formatter={(value) => formatCurrency(value)}
                />
              }
            />
            <Area
              dataKey="revenue"
              type="step"
              fill="url(#fillRevenue)"
              fillOpacity={0.4}
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-revenue)",
                fillOpacity: 1,
                r: 4,
                strokeWidth: 0,
              }}
              activeDot={{
                r: 6,
              }}
            >
              <defs>
                <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-revenue)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-revenue)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
            </Area>
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
