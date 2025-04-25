'use server';

import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    surname: z.string().min(1, { message: 'Surname is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    message: z.string().min(1, { message: 'Message is required' }),
})

type InternalError = {
    internalError: string[];
}

export type ContactSchemaType = z.infer<typeof contactSchema>;
export type ContactSchemaErrorType = z.inferFlattenedErrors<typeof contactSchema> & InternalError;

type ContactState = {
    data: ContactSchemaType;
    errors: ContactSchemaErrorType;
    success: boolean;
}

export const contact = async (state: ContactState, formData: FormData) => {
    const data = Object.fromEntries(formData);
    const result = contactSchema.safeParse(data);

    if (!result.success) {
        return {
            data: data as ContactSchemaType,
            errors: result.error.formErrors as ContactSchemaErrorType,
            success: false,
        }
    }

    try {
        const response = await fetch('https://gritifi.com/api/send', {
            method: 'POST',
            body: JSON.stringify(result.data),
        })

        if (!response.ok) {
            const responseJson = await response.json();
            throw new Error(responseJson?.error ?? 'Something went wrong while sending your message. Please try again later.');
        }

        return {
            data: {
                name: '',
                surname: '',
                email: '',
                message: '',
            },
            errors: {} as ContactSchemaErrorType,
            success: true,
        }

    } catch (error) {
        console.error('Error occurred while sending contact data:', error);
        return {
            data: result.data,
            errors: {
                internalError: ['Something went wrong while sending your message. Please try again later.'],
            } as ContactSchemaErrorType,
            success: false,
        }
    }
}