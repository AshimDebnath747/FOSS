import { z } from 'zod';
export const addSoftwareSchema = z.object({
    name: z.string().min(2, "Name is too short"),

    description: z
        .string("Invalid description"),
    category: z.string("Invalid Category"),
    pageurl: z.string("Invalid URL"),
    logourl: z.string("Invalid Logo URL"),
    license: z
        .string("Invalid License")
})