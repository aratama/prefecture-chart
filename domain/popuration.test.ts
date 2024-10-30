import { test, expect } from "vitest";
import { populationSchema, prefectureSchema } from "./popuration";

test("都道府県一覧のパース", () => {
  expect(prefectureSchema.safeParse(PREFECTURE_RESULT).success).toBe(true);
});

test("人口増減率のパース", () => {
  expect(populationSchema.safeParse(POPULATION_RESULT).success).toBe(true);
});

// https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
const PREFECTURE_RESULT = {
  message: null,
  result: [
    {
      prefCode: 1,
      prefName: "北海道",
    },
    {
      prefCode: 2,
      prefName: "青森県",
    },
    {
      prefCode: 3,
      prefName: "岩手県",
    },
    {
      prefCode: 4,
      prefName: "宮城県",
    },
    {
      prefCode: 5,
      prefName: "秋田県",
    },
    {
      prefCode: 6,
      prefName: "山形県",
    },
    {
      prefCode: 7,
      prefName: "福島県",
    },
    {
      prefCode: 8,
      prefName: "茨城県",
    },
    {
      prefCode: 9,
      prefName: "栃木県",
    },
    {
      prefCode: 10,
      prefName: "群馬県",
    },
    {
      prefCode: 11,
      prefName: "埼玉県",
    },
    {
      prefCode: 12,
      prefName: "千葉県",
    },
    {
      prefCode: 13,
      prefName: "東京都",
    },
    {
      prefCode: 14,
      prefName: "神奈川県",
    },
    {
      prefCode: 15,
      prefName: "新潟県",
    },
    {
      prefCode: 16,
      prefName: "富山県",
    },
    {
      prefCode: 17,
      prefName: "石川県",
    },
    {
      prefCode: 18,
      prefName: "福井県",
    },
    {
      prefCode: 19,
      prefName: "山梨県",
    },
    {
      prefCode: 20,
      prefName: "長野県",
    },
    {
      prefCode: 21,
      prefName: "岐阜県",
    },
    {
      prefCode: 22,
      prefName: "静岡県",
    },
    {
      prefCode: 23,
      prefName: "愛知県",
    },
    {
      prefCode: 24,
      prefName: "三重県",
    },
    {
      prefCode: 25,
      prefName: "滋賀県",
    },
    {
      prefCode: 26,
      prefName: "京都府",
    },
    {
      prefCode: 27,
      prefName: "大阪府",
    },
    {
      prefCode: 28,
      prefName: "兵庫県",
    },
    {
      prefCode: 29,
      prefName: "奈良県",
    },
    {
      prefCode: 30,
      prefName: "和歌山県",
    },
    {
      prefCode: 31,
      prefName: "鳥取県",
    },
    {
      prefCode: 32,
      prefName: "島根県",
    },
    {
      prefCode: 33,
      prefName: "岡山県",
    },
    {
      prefCode: 34,
      prefName: "広島県",
    },
    {
      prefCode: 35,
      prefName: "山口県",
    },
    {
      prefCode: 36,
      prefName: "徳島県",
    },
    {
      prefCode: 37,
      prefName: "香川県",
    },
    {
      prefCode: 38,
      prefName: "愛媛県",
    },
    {
      prefCode: 39,
      prefName: "高知県",
    },
    {
      prefCode: 40,
      prefName: "福岡県",
    },
    {
      prefCode: 41,
      prefName: "佐賀県",
    },
    {
      prefCode: 42,
      prefName: "長崎県",
    },
    {
      prefCode: 43,
      prefName: "熊本県",
    },
    {
      prefCode: 44,
      prefName: "大分県",
    },
    {
      prefCode: 45,
      prefName: "宮崎県",
    },
    {
      prefCode: 46,
      prefName: "鹿児島県",
    },
    {
      prefCode: 47,
      prefName: "沖縄県",
    },
  ],
};

// https://opendata.resas-portal.go.jp/docs/api/v1/population/sum/perYear.html
const POPULATION_RESULT = {
  message: null,
  result: {
    line: {
      boundaryYear: 2020,
      data: [
        {
          year: 1985,
          value: -0.85,
        },
        {
          year: 1990,
          value: -1.06,
        },
        {
          year: 1995,
          value: 0.25,
        },
        {
          year: 2000,
          value: -3.19,
        },
        {
          year: 2005,
          value: -5.57,
        },
        {
          year: 2010,
          value: -5.46,
        },
        {
          year: 2015,
          value: -6.92,
        },
        {
          year: 2020,
          value: -8.19,
        },
        {
          year: 2025,
          value: -9.35,
        },
        {
          year: 2030,
          value: -9.73,
        },
        {
          year: 2035,
          value: -10.42,
        },
        {
          year: 2040,
          value: -11.26,
        },
        {
          year: 2045,
          value: -11.96,
        },
      ],
    },
    bar: {
      data: [
        {
          year: 1985,
          sum: -0.85,
          class: [
            {
              label: "老年人口",
              value: 9.81,
            },
            {
              label: "生産年齢人口",
              value: -1.47,
            },
            {
              label: "年少人口",
              value: -4.7,
            },
          ],
        },
        {
          year: 1990,
          sum: -1.06,
          class: [
            {
              label: "老年人口",
              value: 22.27,
            },
            {
              label: "生産年齢人口",
              value: -1.11,
            },
            {
              label: "年少人口",
              value: -15.27,
            },
          ],
        },
        {
          year: 1995,
          sum: 0.25,
          class: [
            {
              label: "老年人口",
              value: 21.82,
            },
            {
              label: "生産年齢人口",
              value: -1.17,
            },
            {
              label: "年少人口",
              value: -13.93,
            },
          ],
        },
        {
          year: 2000,
          sum: -3.19,
          class: [
            {
              label: "老年人口",
              value: 13.45,
            },
            {
              label: "生産年齢人口",
              value: -5.62,
            },
            {
              label: "年少人口",
              value: -14.4,
            },
          ],
        },
        {
          year: 2005,
          sum: -5.57,
          class: [
            {
              label: "老年人口",
              value: 5.84,
            },
            {
              label: "生産年齢人口",
              value: -7.4,
            },
            {
              label: "年少人口",
              value: -16.54,
            },
          ],
        },
        {
          year: 2010,
          sum: -5.46,
          class: [
            {
              label: "老年人口",
              value: 4.43,
            },
            {
              label: "生産年齢人口",
              value: -9.16,
            },
            {
              label: "年少人口",
              value: -8.38,
            },
          ],
        },
        {
          year: 2015,
          sum: -6.92,
          class: [
            {
              label: "老年人口",
              value: 8.27,
            },
            {
              label: "生産年齢人口",
              value: -13.28,
            },
            {
              label: "年少人口",
              value: -13.39,
            },
          ],
        },
        {
          year: 2020,
          sum: -8.19,
          class: [
            {
              label: "老年人口",
              value: 3.95,
            },
            {
              label: "生産年齢人口",
              value: -14.11,
            },
            {
              label: "年少人口",
              value: -18.17,
            },
          ],
        },
        {
          year: 2025,
          sum: -9.35,
          class: [
            {
              label: "老年人口",
              value: -4.35,
            },
            {
              label: "生産年齢人口",
              value: -11.95,
            },
            {
              label: "年少人口",
              value: -12.17,
            },
          ],
        },
        {
          year: 2030,
          sum: -9.73,
          class: [
            {
              label: "老年人口",
              value: -6.13,
            },
            {
              label: "生産年齢人口",
              value: -11.79,
            },
            {
              label: "年少人口",
              value: -14.22,
            },
          ],
        },
        {
          year: 2035,
          sum: -10.42,
          class: [
            {
              label: "老年人口",
              value: -7.46,
            },
            {
              label: "生産年齢人口",
              value: -11.96,
            },
            {
              label: "年少人口",
              value: -15.88,
            },
          ],
        },
        {
          year: 2040,
          sum: -11.26,
          class: [
            {
              label: "老年人口",
              value: -3.96,
            },
            {
              label: "生産年齢人口",
              value: -17.52,
            },
            {
              label: "年少人口",
              value: -13.48,
            },
          ],
        },
        {
          year: 2045,
          sum: -11.96,
          class: [
            {
              label: "老年人口",
              value: -8.19,
            },
            {
              label: "生産年齢人口",
              value: -15.66,
            },
            {
              label: "年少人口",
              value: -13.64,
            },
          ],
        },
      ],
    },
  },
};
