const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let newArr= expr.split('');
    let amountLetters = newArr.length/10;
    let str='';
    for(let i=0; i < amountLetters; i++) {
        let letter = newArr.splice(0, 10).join('');
        letter = (letter === '**********') ? ' ' : decodeLetter(letter);
        str+=letter;
    }

    return str;
}
function decodeLetter(letter) {
    let letterArr = letter.split('');
    let morseSymb = ''
    for (let i = 0; i <5; i++) {
        let piece = letterArr.splice(0, 2).join('');
        switch(piece) {
            case '10': 
                morseSymb+='.';
                break;
            case '00': 
                morseSymb+='';
                break;
            case '11': 
                morseSymb+='-';
                break;
        }
    }
    return MORSE_TABLE[morseSymb];
}

// function decode(expr) {
//     let newArr= expr.split('');
//     let amountLetters = newArr.length/10;
//     let str='';
//     for(let i=0; i < amountLetters; i++) {
//         let letterInNum = newArr.splice(0, 10).join('');
//         letterInNum = (letterInNum === '**********') ? ' ' : decodeLetter(letterInNum);
//         str+=letterInNum;
//     }

//     return str;
// }
// function decodeLetter(letterInNum) {
//     let letterInNumArr = letterInNum.split('');
//     let letter = DecodeSymb(letterInNumArr);

//     function DecodeSymb(letterInNumArr){
//         if(morseLetter == undefined) let morseLetter;
//         if(letterInNumArr.length > 0) {
//             switch(letterInNumArr.splice(0, 2).join('')) {
//                 case '10': 
//                     morseLetter='.';
//                     break;
//                 case '11': 
//                     morseLetter='-';
//                     break;
//             }
//             DecodeSymb(letterInNumArr, morseLetter)
//         } else {
//             return MORSE_TABLE[morseLetter];
//         }
//     }
//     return letter;
// }

module.exports = {
    decode
}