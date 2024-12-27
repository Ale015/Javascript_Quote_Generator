// Variables
let generateBtn = document.getElementById('generateBtn');
let quoteText = document.getElementById('quoteText');
let author = document.getElementById('author');
let category = document.getElementById('category');

// Generate Function
async function fetchQuote(){
    try{
        const response = await fetch('https://api.quotable.io/random')
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        //Update Quote
        quoteText.textContent = `"${data.content}"`;

        //Update Author
        author.textContent = `~ ${data.author}`;

        // Category Changes
        category.textContent = `${data.tags[0]}`


    }
    catch(e){
        console.error('Failed to fetch quote:', e);
        quoteText.textContent = "Oops! Something went wrong. Please try again.";
        author.textContent = "";
    }
}

fetchQuote();
generateBtn.addEventListener('click', fetchQuote);


// Change Font Family








function changeFontFamily(){

    let arrayOfFonts = ["Ysabeau SC","Roboto", "Montserrat", "Kanit", "Playfair Display"];
}