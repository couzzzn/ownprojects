let chat=[
    '-Privet!',
    '-Privetik!',
    '-Kak dela?',
    '-Normik, a u tebya?',
    '-Toge normik. Go pogulayem?',
    '-Nie, kagetsya dojd budet, go luchshe w kino?',
    '-Go.',
];

for(let i = 0; i < chat.length; i++){
    let user = 'Ya';
    if(i %2 !== 0){
      user = 'Homie';
    } 
    console.log(`${i+1}. ${user}: ${chat[i]}`);
  }