let lyrics;

function init() {

    computeLyrics();
}
function computeLyrics() {

    for (let i = 99; i >= 0; i--) {
        if (i >= 3) {
            lyrics = `<p>${i} bottles of beer on the wall, ${i} bottles of beer\n
                Take one down and pass it around, ${i - 1} bottles of beer on the wall</P>`;
            displayLyrics();

        } else if (i == 2) {
            lyrics = `<p>${i} bottles of beer on the wall, ${i} bottles of beer\n
            Take one down and pass it around, ${i - 1} bottle of beer on the wall</P>`;
            displayLyrics();

        } else if (i == 1) {
            lyrics = `<p>${i} bottle of beer on the wall, ${i} bottles of beer\n
            Take one down and pass it around, ${i - 1} bottle of beer on the wall</P>`;
            displayLyrics();

        } else {
            lyrics = `<p>No more bottles of beer on the wall, no more bottles of beer
            Go to the store and buy some more, ${i + 99} bottles of beer on the wall</P>`;

            displayLyrics();
        }
    }


}
function displayLyrics() {
    document.getElementById("lyrics").innerHTML += lyrics;

}