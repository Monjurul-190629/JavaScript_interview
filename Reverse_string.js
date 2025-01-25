const country = 'Bangladesh';

const revCountry = (c) => {
    let rev = [];
    for(var i = c.length - 1; i>=0; i--){
       rev += c[i];
    }
    console.log(rev)
}

revCountry(country);