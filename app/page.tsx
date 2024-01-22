'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import {ArrowRightIcon, UserCircleIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import {useState} from "react";

export default function Page() {
    // let difficulty = 'not set';
    const [difficulty, setDifficulty] = useState('');

    // const clsxTest: string = 'calm';

    function handleDifficultyChange(level: string) {
        setDifficulty(level);
    }

    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                 <AcmeLogo />
            </div>
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    <div
                        className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
                    />
                    <p className={`${lusitana.className} antialiased text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                        <strong className="text-red-500">Welcome to Acme.</strong> This is the example for the{' '}
                        <a href="https://nextjs.org/learn/" className="text-blue-500">
                            Next.js Learn Course
                        </a>
                        , brought to you by Vercel.
                    </p>
                    <div className="mb-4">
                        <label htmlFor="skillLevel" className="mb-2 block text-sm font-medium">
                            Choose your front-end skill level
                        </label>
                        <div className="relative">
                            <select
                                id="skillLevel"
                                name="skillLevelId"
                                // className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                className={clsx(
                                    'peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 font-bold',
                                    {
                                        'bg-black text-red-500': difficulty === 'expert',
                                        'bg-amber-600 text-white': difficulty === 'seasoned',
                                        'bg-green-500 text-white': difficulty === 'beginner',
                                    }
                                )}
                                defaultValue=""
                                onChange={(e) => {
                                    handleDifficultyChange(e.target.value);
                                }}
                            >
                                <option value="" disabled>
                                    Select a level
                                </option>
                                <option key='1' value="beginner">
                                    Beginner
                                </option>
                                <option key='2' value="seasoned">
                                    Seasoned
                                </option>
                                <option key='3' value="expert">
                                    Expert
                                </option>
                            </select>
                            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
                        </div>
                    </div>
                    {/*<p className={`text-xl`}>*/}
                    {/*    {`This project is `}*/}
                    {/*    <span*/}
                    {/*        className={clsx(*/}
                    {/*            'inline-flex items-center rounded-full px-2 py-1',*/}
                    {/*            {*/}
                    {/*                'bg-black text-red-500 font-bold': clsxTest === 'crazy',*/}
                    {/*                'bg-green-500 text-white': clsxTest === 'calm',*/}
                    {/*            }*/}
                    {/*        )}*/}
                    {/*    >*/}
                    {/*        {clsxTest}*/}
                    {/*    </span>*/}
                    {/*</p>*/}
                    <Link
                        href="/login"
                        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                    >
                        <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6"/>
                    </Link>
                </div>
                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                    {/* Add Hero Images Here */}
                    <Image
                        src="/hero-desktop.png"
                        width={1000}
                        height={760}
                        className="hidden md:block"
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                    <Image
                        src="/hero-mobile.png"
                        width={560}
                        height={620}
                        className="block md:hidden"
                        alt="Screenshots of the dashboard project showing mobile version"
                    />
                </div>
            </div>
        </main>
    );
}
