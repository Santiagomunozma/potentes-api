import {z} from 'zod';

export const createProductSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    price: z.number().positive(),
    stock: z.number().int().positive(),
});

export const updateProductSchema = createProductSchema.deepPartial();