const ones = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const tens = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

function numberToWords(number) {
  if (number === 0) return "Zero";

  const wordsArray = [];

  function convertLessThanThousand(num) {
    let words = "";

    if (num >= 100) {
      words += ones[Math.floor(num / 100)] + " Hundred ";
      num %= 100;
    }

    if (num >= 20) {
      words += tens[Math.floor(num / 10)] + " ";
      num %= 10;
    }

    if (num > 0) {
      words += ones[num];
    }

    return words;
  }

  // neel
  if (number >= 10000000000000) {
    const neel = Math.floor(number / 10000000000000);
    wordsArray.push(convertLessThanThousand(neel) + " neel");
    number %= 10000000000000;
  }

  // kharab
  if (number >= 100000000000) {
    const kharab = Math.floor(number / 100000000000);
    wordsArray.push(convertLessThanThousand(kharab) + " Kharab");
    number %= 100000000000;
  }

  // arab
  if (number >= 1000000000) {
    const arab = Math.floor(number / 1000000000);
    wordsArray.push(convertLessThanThousand(arab) + " Arab");
    number %= 1000000000;
  }

  // Crores
  if (number >= 10000000) {
    const crore = Math.floor(number / 10000000);
    wordsArray.push(convertLessThanThousand(crore) + " Crore");
    number %= 10000000;
  }

  // Lac
  if (number >= 100000) {
    const lac = Math.floor(number / 100000);
    wordsArray.push(convertLessThanThousand(lac) + " Lac");
    number %= 100000;
  }

  // Thousands
  if (number >= 1000) {
    const thousand = Math.floor(number / 1000);
    wordsArray.push(convertLessThanThousand(thousand) + " Thousand");
    number %= 1000;
  }

  if (number > 0) {
    wordsArray.push(convertLessThanThousand(number));
  }

  return wordsArray.join(" ");
}

function getVal() {
  const number = parseInt(document.getElementById("numberInput").value);
  document.getElementById("result").innerHTML = ` ${numberToWords(number)}`;
  return false;
}
