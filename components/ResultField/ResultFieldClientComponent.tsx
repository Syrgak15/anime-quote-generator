import type { Quote } from '@/interfaces/Quotes';

interface QuotesProps {
    quote: Quote;
}

export default function ResultFieldClientComponent({quote}: QuotesProps) {
    return (
        <div className="result-field flex justify-center mt-[100px]">
            <div className="container max-w-[900px] text-center gap-3 text-white font-mono">
                <div className="generator-field__quote">
                    <p>{quote.data.anime.altName}</p>
                </div>
                <div className="generator-field__author">
                    <span>{quote.data.character}</span>
                </div>
            </div>
        </div>
    )
}