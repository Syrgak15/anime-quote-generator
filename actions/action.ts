export default async function getQuotes() {
    let response = await fetch("https://kitagawachan-api.vercel.app/quotes/random");
    return await response.json();
}