"use client";

import { CategorySelect } from "@/components/category-select";
import { PopulationChart } from "@/components/pupulation-chart";
import { Footer } from "@/components/footer";
import { PrefectureSelect, PrefItem } from "@/components/prefecture-select";
import { PageTitle } from "@/components/page-title";
import { PopulationCategory } from "@/domain/popuration";
import { useState } from "react";

export default function Home() {
  const [prefItem, setPrefItem] = useState<PrefItem[]>([]);

  const [category, setCategory] = useState<PopulationCategory>("総人口");

  return (
    <div className="">
      <main className="flex flex-col gap-8">
        <PageTitle />

        <PrefectureSelect
          items={prefItem}
          onChange={(value) => {
            setPrefItem(value);
          }}
        />

        <CategorySelect value={category} onChange={setCategory} />

        <PopulationChart items={prefItem} category={category} />
      </main>

      <Footer />
    </div>
  );
}
