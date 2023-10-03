import { z } from 'zod';

const schema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(6)
		.max(20)
		.refine((value) => {
			return value === 'admin123';
		}, 'Password is not correct')
});

export default schema;
