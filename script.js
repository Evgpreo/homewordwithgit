
//задание 5

// function stringName(string) {
//     let x = string.split('.')
//     console.log(x);
//     let sent = x[0].split(' ')
//     let sent1 = x[1].split(' ')
//     let sent2 = x[2].split(' ')
//     console.log(sent)
//     let word = sent[0];
//     let word1 = sent1[1];
//     let word2 = sent2[1];
//     let wordsComma = `${word} , ${word1} , ${word2}`;
//     console.log(wordsComma);
// }
// stringName('Солнце утром восходит. Звезды светят ночью. Лампа работает на электричестве');

// задание 5 дополнение - работает, если нет пробелов перед первым словом

// function stringName(string) {
//     let x = string.split('.')
//     console.log(x);
//     let sent = []
//     let word = ""
//     for (let i = 0; i < x.length; i++) {
//         sent = x[i].split(' ');
//         word += sent[0];
//
//     }
//     console.log(word)
    //     let wordsComma = ' '
    // for (let i = 0; i < sent.length; i++){
    //     wordsComma = sent[i];
    //     console.log(wordsComma);
    // }

// }
// stringName('Солнце утром восходит.Звезды светят ночью.Лампа работает на электричестве.Луна светит ночью');

//задание 5 - решено с пробелами
// function stringName(string) {
//     let x = string.split('.')
//     console.log(x);
//     let sent = ' '
//     let word = ' '
//     for (let i = 0; i < x.length; i++) {
//         sent = x[i].split(' ');
//         console.log(sent);
//         if (sent[0] === '') {
//             word += sent[1] + ' '
//         }else{
//             word += sent[0] + ' '
//         }
//     }
//     console.log(word);
// }
// stringName('Солнце утром восходит. Звезды светят ночью. Лампа работает на электричестве. Луна светит ночью');

//задание 5 - не решено, если много пробелов, сделать цикл на проверку всех пустых строк
// function stringName(string) {
//     let x = string.split('.')
//     console.log(x);
//     let sent = ' '
//     let word = ' '
//     for (let i = 0; i < x.length; i++) {
//         sent = x[i].split(' ');
//         console.log(sent);
//         if (sent[i] === '') {
//             word += sent[1] + ' '
//         }else{
//             word += sent[0] + ' '
//         }
//     }
//     console.log(word);
// }
// stringName('Солнце утром восходит.  Звезды светят ночью. Лампа работает на электричестве. Луна светит ночью');

//задание 5 - решено c добавлением трим
function stringName(string) {
    let x = string.split('.')
    console.log(x);
    let sent = ' '
    let word = ' '
    let newX = ' '
    for (let i = 0; i < x.length; i++) {
        newX = x[i].trim()
        sent = newX.split(' ');
        console.log(sent);
        if (sent[i] === '') {
            word += sent[1] + ' '
        }else{
            word += sent[0] + ' '
        }
    }
    console.log(word);
}
stringName('Солнце утром восходит.  Звезды светят ночью.      Лампа работает на электричестве. Луна светит ночью');



//массивы
//задание 1 - решено


let arr = []
    function wholeNumbers() {
        arr = [1, 2, 4, 6, 8, 10]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                return true
            } else {
                return false

            }
        }
    }
    console.log(wholeNumbers());

//new comments


