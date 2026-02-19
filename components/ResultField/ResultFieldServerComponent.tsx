import ResultFieldClientComponent from "@/components/ResultField/ResultFieldClientComponent";

export default async function ResultFieldServerComponent() {

    let response = await fetch("https://kitagawachan-api.vercel.app/quotes/random");
    let result = await response.json();

    return (
        <ResultFieldClientComponent initialQuote={result}/>
    )
}