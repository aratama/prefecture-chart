import * as z from "zod";

export type PrefCode = number;

export const prefectureSchema = z.object({
  message: z.string().nullable(),
  result: z
    .object({
      prefCode: z.number(),
      prefName: z.string(),
    })
    .array(),
});

export const populationSchema = z.object({
  message: z.string().nullable(),
  result: z.object({
    line: z.object({
      boundaryYear: z.number().int(),
      data: z
        .object({
          year: z.number().int(),
          value: z.number().finite(),
        })
        .array(),
    }),
    bar: z.object({
      data: z
        .object({
          year: z.number().int(),
          sum: z.number(),
          class: z
            .object({
              label: z.enum(["老年人口", "生産年齢人口", "年少人口"]),
              value: z.number().finite(),
            })
            .array(),
        })
        .array(),
    }),
  }),
});
