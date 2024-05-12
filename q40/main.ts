function make_album(artist: string, title: string):{artist: string, title: string}{
    let dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;
}

let album = make_album("Ali","Dream")              
console.log(album)


let album1 = make_album("Atif","life")
console.log(album1)

let album2 = make_album("Zafar","Noor")
console.log(album2)