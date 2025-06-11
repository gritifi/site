'use client';

import { CONTENT, SOCIALS } from '@/content';
import { motion } from 'motion/react';

import Image from "next/image";
import Link from 'next/link';

const container = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const child = {
    initial: { y: '200%' },
    animate: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.33, 1, 0.33, 1]
        }
    }
}

type SocialLinkProps = {
    href: string;
    icon: string;
    alt: string;
}

const SocialLink = ({ data }: Readonly<{ data: SocialLinkProps }>) => {
    return (
        <li>
            <Link href={data.href} target='_blank' rel='noopener noreferrer'>
                <Image src={data.icon} alt={data.alt} width={36} height={36} />
            </Link>
        </li>
    )
}

export default function Hero() {
    return (
        <div>
            <div className="w-full h-[91.2vh] relative text-stone-100">
                <Image src={CONTENT.HERO.image.url} alt={CONTENT.HERO.image.alt} className="object-cover" style={{ objectPosition: '50% 64%' }} quality={100} fill />
                <div className="w-full h-full absolute inset-0 bg-[#007AFF] opacity-50" />

                <div className="absolute top-18 w-full text-center overflow-hidden flex flex-col justify-center items-center">
                    <motion.div variants={container} initial='initial' animate='animate' className='overflow-hidden'>
                        <div className='overflow-hidden max-w-[80%] mx-auto'>
                            <motion.h3
                                variants={child}
                                className="font-light"
                                style={{
                                    fontSize: 'clamp(1.5rem, 1vw + 1rem, 3rem)',
                                }}
                            >
                                {CONTENT.HERO.subHeading}
                            </motion.h3>
                        </div>
                        <motion.h1
                            variants={child}
                            className="font-bold max-w-[60%] mx-auto"
                            style={{
                                fontSize: 'clamp(3.5rem, 4vw + 1rem, 8rem)',
                            }}
                        >
                            {CONTENT.HERO.heading}
                        </motion.h1>

                        <motion.ul className='flex gap-4 justify-center pt-6' variants={child}>
                            {SOCIALS.map((social) => (
                                <SocialLink key={social.href} data={social} />
                            ))}
                        </motion.ul>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}