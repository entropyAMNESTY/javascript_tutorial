function showQuote() {
    let quotes = [];
    quotes[0] =
        'When you reach the end of the rope, tie a knot and hang on';
    quotes[1] = 'There is nothing permanent but change';
    quotes[2] = 'Luck is a dividend of sweat';
    quotes[3] =
        'It takes as much energy to wish, as it does to plan';

    // create random number between 0-3
    let random = Math.floor(Math.random() * quotes.length);

    //identify the p tag, and insert our quote
    document.getElementsByTagName('p')[0].innerHTML =
        quotes[random];
}
