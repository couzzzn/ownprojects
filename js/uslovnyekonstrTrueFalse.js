//let a='10';
//let b=10;
//if(a==b){
//console.log('same');
//}else {
//console.log('notsame');
//}//znaczenyja check
//
//if(a===b){
  //  console.log('same');
    //}else {
    //console.log('notsame');
    //}//znaczenyja i tipy dannych check
    let books=[
        {author:'Aizek', title:'Ya robot'},
        {author:'Robert', title:'Desant'},
        {author:'Gerbert', title:'Voyna'},
        {author:'Tolstoy', title:'Voyna i mir'},
    ];

    for(let i=0;i < books.length; i++){
        let book=books[i];
        console.log(`${i+1}) Author: ${book.author} - Book: ${book.title}`);

    }