"use client";

import { Prefecture } from "@/domain/popuration";
import { useId } from "react";
import { PrefItem } from "./prefecture-select";

export function PrefectureCheckBox(props: {
  items: PrefItem[];
  onChange: (items: PrefItem[]) => void;
  data: Prefecture;
  pref: {
    prefCode: number;
    prefName: string;
  };
}) {
  const { pref, data } = props;

  const id = useId();

  return (
    <span key={pref.prefCode} className="pr-2 flex flex-row gap-1 w-auto float">
      <input
        id={id}
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
      <label htmlFor={id}>{pref.prefName}</label>
    </span>
  );
}
