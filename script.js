const url ='https://api.quotable.io/random' 
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");


async function GenerateQuote(){
    try {
        let response = await fetch(url);
        if (!response.ok) {
          alert(`No definition found for "${word}"`);
        }
        let data = await response.json();
        displayQuote(data);
      } catch (error) {
        alert(error.message);
      }
}
function displayQuote(data){
    const author = data.author;
    authorElement.textContent = author;

    const  quote = data.content;
    quoteElement.textContent = quote;
    
}
function tweet(){
    window.open( `https://twitter.com/intent/tweet?text=${quoteElement.textContent}`,
        "Tweet Window", "width=600,height=300")

}
GenerateQuote();