"use client";

import { prefectureSchema } from "@/domain/popuration";
import useSWR from "swr";
import { PrefectureCheckBox } from "./prefecture-checkbox";

export type PrefItem = { prefName: string; prefCode: number; checked: boolean };

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY ?? "",
    },
  }).then((r) => r.json());

export function PrefectureSelect(props: {
  items: PrefItem[];
  onChange: (items: PrefItem[]) => void;
}) {
  // https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
  const prefectures = useSWR(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    fetcher
  );

  const prefectureParsed = prefectureSchema.safeParse(prefectures.data);

  const data = prefectureParsed.data;

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" grid grid-cols-3 p-2">
      {data.result.map((pref) => {
        return (
          <PrefectureCheckBox
            key={pref.prefCode}
            items={props.items}
            onChange={props.onChange}
            data={data}
            pref={pref}
          />
        );
      })}
    </div>
  );
}
