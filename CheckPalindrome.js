const string = 'Madam';

let string1 = string.toLowerCase();

let revString = string1.split('').reverse().join('');

if(revString == string1){
    console.log('It is Palindrome')
}
else{
    console.log('It is not palindrome')
}