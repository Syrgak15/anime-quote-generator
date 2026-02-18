import ResultFieldClientComponent from "@/components/ResultField/ResultFieldClientComponent";

export default async function ResultFieldServerComponent() {

    let response = await fetch("https://api.animechan.io/v1/quotes/random");
    let result = await response.json();

    return (
        <ResultFieldClientComponent quote={result}/>
    )
}