'use client';

import { Button } from "@chakra-ui/react"
import {useRouter} from "next/navigation";

export default function GeneratorField() {
    const router = useRouter()

    return (
        <div className="generator-field flex justify-center border-3">
            <div className="container max-w-[900px] text-center gap-3 text-white font-mono">
                <div className="generator-field__title text-[70px]">
                    <h1>Anime Quote Generator</h1>
                </div>
                <div className="generator-field__subtitle text-[15px] mt-[10px]">
                    <p>This is a random anime quote generator that will generate
                        random quotes from different anime series/movies.
                    </p>
                </div>
                <div className="generator-field__button flex justify-center mt-[30px] mb-[30px]">
                    <div
                        className="flex flex-wrap items-center gap-2 md:flex-row"
                        onClick={() => router.refresh()}
                    >
                        <Button variant="surface" colorPalette="gray">Generate new quote</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}