function generate(){
    var quotes ={
        "― Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "― Albert Einstein " : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
        "- Pierce Brown":"'Man cannot be freed by the same injustice that enslaved it.'",
        "Candace Bushnell":"'Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.'",
        "Charlotte Eriksson" : "'All I wanted was to live a life where I could be me, and be okay with that'"

        
    }

    var authors = Object.keys(quotes);
    console.log(authors);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}