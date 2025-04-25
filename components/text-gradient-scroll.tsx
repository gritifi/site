'use client';

import { TypographyTagType } from "@/lib/definitions";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

type TextGradientScrollProps = {
    children: string,
    Tag?: TypographyTagType,
    className?: string;
    boldText?: boolean;
}

export default function TextGradientScroll({ children, Tag = 'p', className, boldText = false }: Readonly<TextGradientScrollProps>) {
    const container = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start 0.7', 'end 0.75']
    });

    const words = children.split(' ');

    return (
        <Tag
            ref={container}
            className={`flex text-inherit flex-wrap items-center ${className}`}
            style={{
                fontFamily: 'inherit',
            }}
        >
            {words.map((word, index) => {
                const start = index / words.length;
                const end = start + (1 / words.length);
                return (
                    <Word
                        key={index}
                        progress={scrollYProgress}
                        range={[start, end]}
                        index={index}
                        boldText={boldText}
                    >
                        {word}
                    </Word>
                )
            })}
        </Tag>
    )
}

const Word = ({ progress, range, children, index, boldText }: {
    progress: MotionValue<number>,
    range: number[],
    children: string,
    index: number,
    boldText: boolean,
}) => {
    const opacity = useTransform(progress, range, [0, 1])

    // const amount = range[1] - range[0];
    // const step = amount / children.length;

    const boldIndex = boldText && (index > 33 && index < 36 || index > 36);

    return (
        <span
            className='relative mr-[6px]'
        >
            <span className='absolute inset-0 opacity-25' style={{ fontWeight: boldIndex ? 600 : 300 }}>{children}</span>
            <motion.span style={{ opacity, fontWeight: boldIndex ? 600 : 300 }}>{children}</motion.span>
        </span>
    )

    // return (
    //     <span
    //         className='relative mr-[6px]'
    //     >
    //         {children.split('').map((char, index) => {
    //             const start = range[0] + (index * step);
    //             const end = range[0] + ((index + 1) * step);
    //             return (
    //                 <Char key={`c_${index}`} progress={progress} range={[start, end]} isBold={boldIndex}>{char}</Char>
    //             )
    //         })}
    //     </span>
    // )
}

// const Char = (
//     { progress, range, children, isBold }: {
//         progress: MotionValue<number>, range: number[], children: string, isBold: boolean,
//     }) => {
//     const opacity = useTransform(progress, range, [0, 1]);

//     return (
//         <span>
//             <span className='absolute opacity-20'>
//                 {children}
//             </span>

//             <motion.span
//                 style={{
//                     opacity,
//                     fontWeight: isBold ? 600 : 300,
//                 }}
//             >
//                 {children}
//             </motion.span>
//         </span >
//     )
// }