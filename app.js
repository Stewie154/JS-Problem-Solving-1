/* 1. Write a programme to check two numbers. 
Return true if one of them equals 100, or if the two added together equal 100 */

    const is100 = (num1, num2) => num1 === 100 || num2 === 100 || num1 + num2 === 100;

    /* console.log(is100(100, 10))
    console.log(is100(10, 100))
    console.log(is100(1, 10))
    console.log(is100(10, 90)) */

    // 2. Write a programme to get the extension of a file name

    const getFileName = (file) => {
        extension = file.slice(file.lastIndexOf("."));
        return extension;
    }

/* console.log(getFileName('index.html'));
console.log(getFileName('index.php'));
console.log(getFileName('index.jpeg'));
console.log(getFileName('index.js')); */

// 3. Write a programme to replace every character in a given string with the character following it in the alphabet.

    const replaceCharacter = (str) => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let newStr = "";
        
        for (i = 0; i < str.length; i ++){
            let alphIndex = alphabet.search(str[i])
            let newLetter = alphabet[alphIndex + 1];
            newStr += newLetter;
        }
        return newStr;
    }
    /*console.log(replaceCharacter("apple"));
    console.log(replaceCharacter("abc"));*/

/* 4. Write a JavaScript programme to get the current date. 

   Expected output:

    mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

    const returnDate = (date = new Date()) => {
        const days = date.getDate();
        const months = date.getMonth() +1;
        const years = date.getFullYear();
        return `${days} / ${months} / ${years}`;
    }

    //console.log(returnDate());

/* 5. Write a JavaScript programme to create a new string adding 'New!' infront of a given string.
      if the given string begins with 'New!' already, return the orginal string. */
      
    const newString = (str) => {
        const compare = str.slice(0, 4);
        if (compare === "New!") {
            return str; 
        } else {
            return "New! " + str;
        }
    }

    //console.log(newString('offers'));
    //console.log(newString('New! string'));

/* 6. Write a new JavaScript programme to create a new string from a given string, taking the first and last 3
      characters and adding them together. The string length must be 3 or more. If not, return the original string. */

      //method 1
    const stringAdd = (str) => {
        const part1 = str.slice(0, 3);
        const part2 = str.slice(-3);

        if (str.length >= 3) {
            return part1 + part2;
        }
        else{
            return str;
        }
    }
    //console.log(stringAdd('dd'));
    //console.log(stringAdd('information'));

    //method 2
    const makeNewString = (str) => str.length < 3 ? str : str.slice(0,3) + str.slice(-3);

    //console.log(makeNewString('sds'));
    //console.log(makeNewString('sd'));
    //console.log(makeNewString('information'));

/* 7. Write a JavaScript programme to extract the first half of a string at even length. */

    const halfEven = (str) => str.length % 2 === 0 ? str.slice(0, str.length / 2) : str;

    //console.log(halfEven('informationn'));
    //console.log(halfEven('abc'));

/* 8. Write a JavaScript programme to concatenate two strings except their first character. */

    const twoMissingFirst = (str1, str2) => str1.slice(1) + str2.slice(1);

    //console.log(twoMissingFirst("hello", "there"));

/* 9. Given two values, write a JavaScript programme to find out which one is nearer to 100 */

    const nearer100 = (num1, num2) => Math.abs(100 - num1) < Math.abs(100 - num2) ? num1 : num2;

    /*console.log(nearer100(99, 1));
    console.log(nearer100(40, 90));
    console.log(nearer100(101, 50)); */

/* 10. Write a JavaScript programme to check if a string  contains 2 to 4 occurances of a specified character */

    const stringCheck = (str, char) => {
        let count = 0;
        for (i=0; i - str.length; i++){
            if (str[i] === char){
                count ++;
            }
        }
        if (count >= 2 && count <= 4){
            return true;
        } else {
            return false;
        }
    }
    /*console.log(stringCheck('hello', 'l'));
    console.log(stringCheck('helloooo', 'o'));
    console.log(stringCheck('hellooooo', 'o'));*/

/* 11. Write a JavaScript programme to find the number of even digits in an array of numbers*/

    //method 1:

    const numOfEven = (arr) => {
        let count = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0){
                count ++
            }
        }
        return count;
    }

    //console.log(numOfEven([1, 2, 3, 4, 5, 6, 7, 8]));

    //method 2:
    const countEven = (arr) => arr.filter(num => num % 2 === 0).length;

    /*console.log(countEven([1, 2, 3, 4, 5, 6]));
    console.log(countEven([1, 10, 12, 14, 15, 16, 18]));
    console.log(countEven([1, 2, 3, 4, 5, 6]));*/
    
/* 12. Write a JavaScript programme to find the number of even values up to a given number*/

    const evenValues = (num) => {
        let newArr = [];
        let currentNum = 0;
        while(newArr.length < num){
            currentNum += 1
            newArr.push(currentNum)
        }
        return newArr.filter(n => n % 2 === 0).length;
    }

    /*console.log(evenValues(10));
    console.log(evenValues(5));
    console.log(evenValues(15));*/

/* 13. Write a JavaScript programme to check whether a given array of integers is sorted in ascending order.*/

    const isAscending = (arr) => {
        for (i = 0; i < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                return false;
            }
        }
        return true;
    }

    /*console.log(isAscending([1, 2, 1, 4, 5, 6]));
    console.log(isAscending([1, 2, 1, 4, 5, 4]));
    console.log(isAscending([1, 2, 3, 4, 5, 6]));*/

/* 14. Write a JavaScript programme to get the largest even number from an array of integers.*/ 
    //method 1
    const largestEven = (arr) => {
        let largestNum = 0;
        for(i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0 && arr[i] > largestNum){
                largestNum = arr[i];
            }
        }
        return largestNum;
    }

    /*console.log(largestEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    console.log(largestEven([1, 2, 3, 401, 5, 6, 7, 8, 9, 10]));
    console.log(largestEven([1, 200, 3, 4, 5, 6, 7, 8, 9]));*/

    //method 2

    const larEven = (arr) => Math.max(...arr.filter(num => num % 2 === 0));

    /*console.log(larEven([1, 2, 3, 44, 55, 67]));
    console.log(larEven([1, 2, 3, 44, 56, 67]));
    console.log(larEven([1, 2, 3, 43, 55, 67]));*/

/* 15. Write a JavaScript programme to replace the first digit in a string 
        (must contain at least 1 digit) with the '$' character.*/
    
    const replaceDigit = (str) => str.replace(/[0-9]/, '%');
    

    /*console.log(replaceDigit('I love eating 3 apples'));
    console.log(replaceDigit('ahasdkasd3423'));
    console.log(replaceDigit('4ksdf45'));*/

