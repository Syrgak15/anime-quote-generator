
import type { Quote } from '@/interfaces/Quotes';

interface QuotesProps {
    initialQuote: Quote;
}

export default function ResultFieldClientComponent({initialQuote}: QuotesProps) {

    return (
        <div className="result-field flex justify-center mt-[100px]">
            <div className="container max-w-[900px] text-center gap-3 text-white font-mono">
                <div className="generator-field__quote text-[40px]">
                    <p>{initialQuote.quotesentence}</p>
                </div>
                <div className="generator-field__author text-[15px]">
                    <span>{initialQuote.quotecharacter}</span>
                    <br/>
                    <span>{initialQuote.quoteanime}</span>
                </div>
            </div>
        </div>
    )
}