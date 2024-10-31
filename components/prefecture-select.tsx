"use client";

import { PopulationChart } from "@/components/chart";
import { PrefCode, prefectureSchema } from "@/domain/popuration";
import useSWR from "swr";

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
    <div>
      {data.result.map((pref) => {
        return (
          <span key={pref.prefCode}>
            <input
              type="checkbox"
              onInput={(e) => {
                const checkedItemSet = new Set(
                  props.items
                    .filter((item) => item.checked)
                    .map((item) => item.prefCode)
                );
                props.onChange(
                  data.result.map((item) => {
                    return {
                      prefCode: item.prefCode,
                      prefName: item.prefName,
                      checked:
                        item.prefCode === pref.prefCode
                          ? e.currentTarget.checked
                          : checkedItemSet.has(item.prefCode),
                    };
                  })
                );
              }}
            />
            <label>
              {pref.prefName}({pref.prefCode})
            </label>
          </span>
        );
      })}
    </div>
  );
}
