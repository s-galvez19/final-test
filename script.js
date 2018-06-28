// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
var button = document.querySelector('.button');
var quoteA = document.querySelector('.quote-author');
var quoteT = document.querySelector('.quote-text');



function getQuote() {
    $.ajax({
        url: API_URL,
        dataType: 'json',
        success : function(data){
            console.log(data);
            quoteA.textContent = data.quoteAuthor;
            quoteT.textContent = data.quoteText;
        },
    
    error: function(error){
        console.log("There was an error");
    }    
  })
}

function clickHandler(e){
//    if (button.textContent == "Get new Quote"){
        quoteT.textContent = getQuote();
//    }
}

//
button.addEventListener('click', clickHandler);

