export default async function getQuotes() {
    let response = await fetch("https://anime-quote-generator.free.beeceptor.com/quotes");
    return await response.json();
}