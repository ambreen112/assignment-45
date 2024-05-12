function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;
}
var album = make_album("Ali", "Dream");
console.log(album);
var album1 = make_album("Atif", "life");
console.log(album1);
var album2 = make_album("Zafar", "Noor");
console.log(album2);
