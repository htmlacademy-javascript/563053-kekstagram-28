//Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.

const checkLength = (string, stringLength) => string.length < stringLength;

//Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.

const textTransform = (string) => {
  let tempString = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = 1; i <= tempString.length; i++) {
    reverseString += tempString.at(tempString.length - i);
  }
  return tempString === reverseString;
};

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

const checkNumbers = (string) => {
  if (typeof string === 'number') {
    return string.toString;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.

const padStart = (string, minLength, pad) => {
  const currentPad = minLength - string.length;
  if (currentPad <= 0) {
    return string;
  }
  return pad.slice(0, currentPad % pad.length) + pad.repeat(currentPad / pad.length) + string;
};
