//Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.

const checkLength = (string, stringLength) => {
  return string.length < strLength;
}

//Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.

const textTransform = (string) => {
  let tempString = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = 1; i <= tempString.length; i++) {
    reverseString += tempString.at(tempString.length - i);
  }
  return tempString === reverseString;
}

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

const checkNumbers = (string) => {
  if (typeof string === 'number') {
    return string.toString;
  }
  let result = '';
  for (let i = 0; i < string.length; i++ ) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
}
