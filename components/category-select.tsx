"use client";

import {
  labelValues,
  PopulationCategory,
  populationCategorySchema,
} from "@/domain/popuration";

export function CategorySelect(props: {
  value: PopulationCategory;
  onChange: (value: PopulationCategory) => void;
}) {
  return (
    <select
      className=" border w-full"
      onChange={(e) => {
        props.onChange(populationCategorySchema.parse(e.currentTarget.value));
      }}
    >
      {labelValues.map((label) => {
        return (
          <option key={label} value={label}>
            {label}
          </option>
        );
      })}
    </select>
  );
}
