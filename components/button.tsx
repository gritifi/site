import { ButtonHTMLAttributes, ReactNode } from "react"
import { cva } from "class-variance-authority"

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'submit';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonStyles = cva('rounded-2xl cursor-pointer font-bold w-[8em]', {
    variants: {
        variant: {
            primary: 'bg-[#FF6B6B] hover:bg-[#FF6B6B]/80 border-5 border-stone-100 text-stone-100 font-bold min-h-[2.1em] text-[3em] lg:text-[2.6em]',
            submit: 'bg-[#50E3C2] hover:bg-[#50E3C2]/80  text-stone-100 min-h-[2em] text-[3em] lg:text-[1.5em] 2xl:text-[2em]',
        },
    }
})

export default function Button({ children, variant = 'primary', ...props }: Readonly<ButtonProps>) {
    return (
        <button
            {...props}
            className={(buttonStyles({ variant }))}
        >
            {children}
        </button>
    )
}