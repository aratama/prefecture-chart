"use client";

import { fetcher, PopulationChart } from "@/components/chart";
import { PrefCode, prefectureSchema } from "@/domain/popuration";
import useSWR from "swr";

export function PrefectureSelect(props: {
  prefCodes: PrefCode[];
  onChange: (prefCodes: PrefCode[]) => void;
}) {
  // https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
  const prefectures = useSWR(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    fetcher
  );

  const prefectureParsed = prefectureSchema.safeParse(prefectures.data);

  return (
    <div>
      {prefectureParsed.success
        ? prefectureParsed.data.result.map((pref) => {
            return (
              <span key={pref.prefCode}>
                <input
                  type="checkbox"
                  onInput={(e) => {
                    const set = new Set(props.prefCodes);
                    if (e.currentTarget.checked) {
                      set.add(pref.prefCode);
                    } else {
                      set.delete(pref.prefCode);
                    }
                    props.onChange(Array.from(set));
                  }}
                />
                <label>
                  {pref.prefName}({pref.prefCode})
                </label>
              </span>
            );
          })
        : "loading..."}
    </div>
  );
}
