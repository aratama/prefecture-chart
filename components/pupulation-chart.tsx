"use client";

import {
  Population,
  PopulationCategory,
  populationSchema,
} from "@/domain/popuration";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useSWR from "swr";
import { PrefItem } from "./prefecture-select";

// https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
const fetcher = async (
  items: PrefItem[]
): Promise<{ prefCode: number; prefName: string; data: Population }[]> => {
  return await Promise.all(
    items
      .filter((item) => item.checked)
      .map(async ({ prefCode, prefName }) => {
        const params = new URLSearchParams({
          prefCode: prefCode.toString(),
          cityCode: "-",
        });

        const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear
?${params.toString()}`;
        const r = await fetch(url, {
          headers: {
            "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY ?? "",
          },
        });

        const json = await r.json();

        const data = populationSchema.parse(json);

        return {
          prefCode,
          prefName,
          data,
        };
      })
  );
};

export function PopulationChart(props: {
  items: PrefItem[];
  category: PopulationCategory;
}) {
  const populationRawResults = useSWR(props.items, fetcher);

  if (!populationRawResults.data) {
    return;
  }

  const populations = populationRawResults.data;

  const table = toChartData(populations, props.category);

  return (
    <div>
      <ResponsiveContainer width="100%" height={800}>
        <LineChart
          width={800}
          height={400}
          data={table}
          margin={{
            top: 50,
            right: 80,
            left: 50,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{
              value: "人口数",
              position: "right",
              offset: 30,
            }}
          />
          <YAxis
            label={{
              value: "年度",
              position: "top",
              offset: 20,
            }}
          />
          <Tooltip />
          <Legend />
          {populations.map(({ prefCode, prefName }, index) => (
            <Line
              key={prefCode}
              type="monotone"
              dataKey={prefName.toString()}
              stroke={colorNames[index]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function toChartData(
  populations: {
    prefCode: number;
    prefName: string;
    data: Population;
  }[],
  category: PopulationCategory
): Record<string, string | number>[] {
  const years: number[] = Array.from(
    new Set(
      populations
        .flatMap((p) =>
          p.data.result.data
            .find((i) => i.label === category)
            ?.data.map((d) => d.year)
        )
        .filter((y) => y !== undefined)
    )
  );
  years.sort();

  const table: Record<string, number | string>[] = years.map((year) => ({
    name: year.toString(),
  }));

  for (const population of populations) {
    for (const { data, label } of population.data.result.data) {
      if (label === category) {
        for (const { year, value } of data) {
          const record =
            table.find((item) => item.name === year.toString()) ?? {};
          record[population.prefName] = value;
        }
      }
    }
  }

  return table;
}

// この色名はChatGPTに指示して生成させたものです
const colorNames = [
  "Black",
  "Blue",
  "Green",
  "Cyan",
  "Red",
  "Magenta",
  "DarkGray",
  "White",
  "Navy",
  "DarkBlue",
  "DarkGreen",
  "Teal",
  "DarkCyan",
  "MediumGreen",
  "Lime",
  "LightGreen",
  "LightCyan",
  "Maroon",
  "DarkRed",
  "Olive",
  "DarkSlateGray",
  "LightSlateGray",
  "SlateGray",
  "Gray",
  "FireBrick",
  "DarkOrange",
  "Orange",
  "Gold",
  "Khaki",
  "MediumOrchid",
  "PaleVioletRed",
  "LightGoldenrodYellow",
  "PaleGreen",
  "MediumTurquoise",
  "Turquoise",
  "MediumSlateBlue",
  "LightCoral",
  "Lavender",
  "MistyRose",
  "LightPink",
  "IndianRed",
  "CornflowerBlue",
  "SteelBlue",
  "PowderBlue",
];
