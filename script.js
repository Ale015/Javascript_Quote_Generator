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

let changeFontBtn = document.getElementById('changeFontBtn')
let currentFontIndex = 0;
let arrayOfFonts = ["font-Ysabeau_SC","font-Roboto","font-Montserrat","font-Kanit","font-Playfair_Display","font-Times_New_Roman"];


function changeFontFamily(){


    quoteText.classList.remove(arrayOfFonts[currentFontIndex]);
    author.classList.remove(arrayOfFonts[currentFontIndex]);
    category.classList.remove(arrayOfFonts[currentFontIndex]);

    currentFontIndex = (currentFontIndex + 1) % arrayOfFonts.length;

    quoteText.classList.add(arrayOfFonts[currentFontIndex]);
    author.classList.add(arrayOfFonts[currentFontIndex]);
    category.classList.add(arrayOfFonts[currentFontIndex]);
}

changeFontBtn.addEventListener('click', changeFontFamily);
