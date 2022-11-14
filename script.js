var nytimesURL = 'https://api.nytimes.com/svc/books/v3/lists/current/mass-market-monthly.json?api-key=';
var apiKey = '';
var reqURL = nytimesURL + apiKey;

const bttn = document.getElementById('bttn');
i = 0;

fetch(reqURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('title').innerHTML = data.results.books[0].title;
        document.getElementById('author').innerHTML = data.results.books[0].author;
        document.getElementById('img').src = data.results.books[0].book_image;
    });

function getRec() {
    if (i < 14) {
        i++;
    } else {};
    if (i === 14) {
        i = 0;
    } else {};
    fetch(reqURL)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').innerHTML = data.results.books[i].title;
            document.getElementById('author').innerHTML = data.results.books[i].author;
            document.getElementById('img').src = data.results.books[i].book_image;
    });
}; 

bttn.addEventListener('click', () => {
    getRec();
});
