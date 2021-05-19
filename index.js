let quotesDiv = document.getElementById('quotes');

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quotes =>{
    quotesDiv.innerHTML += '<p> ${quote.quote}</p>'
})