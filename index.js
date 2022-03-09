// var colors  = require('colors') ; // раскрасить можно и без использования COLORS - в задании это не указано - сделал оба варианта
const colorsNum = ['\x1b[32m%s\x1b[0m', '\x1b[33m%s\x1b[0m', '\x1b[31m%s\x1b[0m']; // задаём массив цветов: красный, жёлтый и зелёный

const oneNum = Number(process.argv[2]); // первое число диапозона
const twoNum = Number(process.argv[3]); // последнее число диапозона
let colorNum = 0; // цвет первого выводимого простого числа - задаём номер 0 из массива, т.е. зелёный
let noPrimeNum = true; // нет простых чисел

if(Number.isNaN(oneNum) || Number.isNaN(twoNum)){ // проверяем ввод обоих чисел диапозона
    // console.log('Введите верно начальное и конечное значения интервала'.red); 
    console.log(colorsNum[2], 'Введите верно начальное и конечное значения интервала'); // красный цвет из массива
    // выводим сообщение красным цветом
    return;
}

const isPrimeNum = (num) => {
    if (num <= 1)
        return false;
    for(let i = 2; i < num; i++) // Для всех i...    
        if(num % i === 0) return false; // проверить, делится ли число без остатка.. не подходит, берём следующее
    return true; // простое число
}

const changeColorNum = () => { // следующий цвет
  colorNum++;
    if (colorNum > (colorsNum.length-1)) {
      colorNum = 0
    };
}

const colorPrint = (num) => {
    if(noPrimeNum) noPrimeNum = false;

    console.log(colorsNum[colorNum], `${num}`);

    // if(colorNum === 0) {console.log(colors.green(`${num}`))} // можно цвет задать так
    // else if(colorNum === 1) {console.log(`${num}`.yellow)} // можно и так
    // else {console.log(`${num}`.red)};
 
    // switch (colorNum) {
    //     case 0:
    //         console.log(colors.green(`${num}`));
    //         break;
    //     case 1:
    //         console.log(colors.yellow(`${num}`));
    //         break;
    //     case 2:
    //         console.log(`${num}`.red);
    //         break;            
    // }
    changeColorNum();
}

for (let i = oneNum; i <= twoNum; i++){
    if (isPrimeNum(i)) colorPrint(i);
}

if(noPrimeNum) 
    // console.log(`В диапазоне от ${oneNum} до ${twoNum} нет простых чисел`.red);
    console.log(`\x1b[31m%s\x1b[0m`, `В диапазоне от ${oneNum} до ${twoNum} нет простых чисел`); // красный цвет без использования массива
