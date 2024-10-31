"use client";

import {
  PopulationCategory,
  populationCategorySchema,
  labelValues,
} from "@/domain/popuration";

export function CategorySelect(props: {
  value: PopulationCategory;
  onChange: (value: PopulationCategory) => void;
}) {
  return (
    <select
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
