import { populationSchema, PrefCode } from "@/domain/popuration";
import { LineChart, Line } from "recharts";
import useSWR from "swr";

export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY ?? "",
    },
  }).then((r) => r.json());

export function PopulationChart(props: { prefCodes: PrefCode[] }) {
  const prefCode = props.prefCodes[0];

  if (!prefCode) {
    return null;
  }

  // https://opendata.resas-portal.go.jp/docs/api/v1/population/sum/perYear.html
  const params = new URLSearchParams({
    prefCode: prefCode.toString(),
    cityCode: "-",
  });
  const population = useSWR(
    `https://opendata.resas-portal.go.jp/api/v1/population/sum/perYear?${params.toString()}`,
    fetcher
  );

  const populationParsed = populationSchema.safeParse(population.data);

  const data = populationParsed.data?.result.line.data.map((data) => {
    return { name: data.year.toString(), uv: data.value };
  });

  return (
    data && (
      <div>
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </div>
    )
  );
}
