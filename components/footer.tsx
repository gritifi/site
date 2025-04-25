'use client';

import { useActionState } from "react";
import Button from "./button";
import Input from "./input";
import { contact, ContactSchemaErrorType } from "@/lib/actions/contact";
import ErrorMessage from "./error-message";
import { CONTENT } from "@/content";

export default function Footer() {
    const [state, formAction, isPending] = useActionState(contact, {
        data: {
            name: '',
            surname: '',
            email: '',
            message: '',
        },
        errors: {} as ContactSchemaErrorType,
        success: false,
    });

    return (
        <div id='contact' className="h-[100vh] relative w-full overflow-hidden"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div
                className="w-full h-[100svh] fixed top-0 left-0"
            >
                <div className="w-full h-full flex flex-col justify-center items-center"
                    style={{
                        gap: 'clamp(3rem, 4vw, 5rem)',
                    }}
                >
                    <div className="max-w-[90%] lg:max-w-[50%] mx-auto">
                        <h1
                            className="text-center font-bolder rotate-[-2.88deg] text-[#007AFF] text-[3.3em] xl:text-[2em] 2xl:text-[2.6em]"
                            style={{
                                fontFamily: 'var(--font-heading)',
                            }}
                        >
                            {CONTENT.FORM.title}
                        </h1>
                    </div>

                    <div className="w-full mx-auto"
                        style={{
                            width: 'clamp(20rem, 50vw + 1rem, 40rem)',
                        }}
                    >
                        <form className="mx-auto flex flex-col gap-4 h-full items-center" action={formAction}>
                            <div className="flex flex-col lg:flex-row w-full gap-2">
                                <Input
                                    name="name"
                                    label="Name"
                                    className="border-[#FF6B6B]"
                                    error={state?.errors?.fieldErrors?.name}
                                    defaultValue={state.data.name}
                                />
                                <Input
                                    name="surname"
                                    label="Surname"
                                    className="border-[#FF6B6B]"
                                    error={state?.errors?.fieldErrors?.surname}
                                    defaultValue={state.data.surname}
                                />
                            </div>
                            <Input
                                name="email"
                                label="Email"
                                className="border-[#007AFF]"
                                error={state?.errors?.fieldErrors?.email}
                                defaultValue={state.data.email}
                            />
                            <Input
                                name="message"
                                label="Message"
                                type={'textarea'}
                                className="border-[#FFD166]"
                                error={state?.errors?.fieldErrors?.message}
                                defaultValue={state.data.message}
                            />

                            {state?.errors?.internalError && (
                                <ErrorMessage error={state.errors?.internalError} />
                            )}

                            <Button variant={'submit'} type='submit'>{isPending ? 'Sending...' : 'Submit'}</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}