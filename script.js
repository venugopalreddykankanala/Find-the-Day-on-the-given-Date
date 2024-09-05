document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dateInput = document.getElementById('dateInput').value;
    const date = new Date(dateInput);
    
    if (isNaN(date)) {
        alert("Invalid date. Please enter a valid date.");
        return;
    }

    // Find day of the week
    const options = { weekday: 'long' };
    const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(date);

    // Check for leap year
    const year = date.getFullYear();
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    
    // Display results
    document.getElementById('dayOfWeek').textContent = `Day of the week: ${dayOfWeek}`;
    document.getElementById('leapYear').textContent = `Leap year: ${isLeapYear ? 'Yes' : 'No'}`;
    
    // Display a random quote
    displayRandomQuote();
});

function displayRandomQuote() {
    const quotes = [
        "Life is what happens when you're busy making other plans. — John Lennon",
        "The purpose of our lives is to be happy. — Dalai Lama",
        "Life is short, and it is up to you to make it sweet. — Sarah Louise Delany",
        "In three words I can sum up everything I've learned about life: it goes on. — Robert Frost",
        "Life isn't about finding yourself. Life is about creating yourself. — George Bernard Shaw",
        "You only live once, but if you do it right, once is enough. — Mae West",
        "Life is either a daring adventure or nothing at all. — Helen Keller",
        "The best way to predict your future is to create it. — Peter Drucker",
        "Life is really simple, but we insist on making it complicated. — Confucius",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. — Buddha",
        "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
        "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
        "The only impossible journey is the one you never begin. — Tony Robbins",
        "You must be the change you wish to see in the world. — Mahatma Gandhi",
        "Life is really precious and I think you need to appreciate it more. — John Boyega"
    ];
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    const quoteElement = document.createElement('p');
    quoteElement.textContent = randomQuote;

    const existingQuoteElement = document.getElementById('quote');
    if (existingQuoteElement) {
        existingQuoteElement.replaceWith(quoteElement);
    } else {
        document.getElementById('result').appendChild(quoteElement);
        quoteElement.id = 'quote';
    }
}
