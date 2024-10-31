"use client";

import { PopulationChart } from "@/components/chart";
import { PrefectureSelect, PrefItem } from "@/components/prefecture-select";
import { PrefCode } from "@/domain/popuration";
import { useState } from "react";

export default function Home() {
  const [prefCodes, setPrefCodes] = useState<PrefItem[]>([]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2">
        <h1>都道府県別総人口推移</h1>

        <PrefectureSelect
          items={prefCodes}
          onChange={(value) => {
            setPrefCodes(value);
          }}
        />

        <PopulationChart items={prefCodes} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
