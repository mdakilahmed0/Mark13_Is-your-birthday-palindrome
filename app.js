const dateOfBirth = document.querySelector("#date-of-birth");
const checkBtn = document.querySelector("#palindrome-check-btn");
const result = document.querySelector("#output");

function reverseStr(str) {
    var listOfChars = str.split("");
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join("");
    // var reversedStr = str.spli('').reverse().join('');
    // One liner code substitutions
    return reversedStr;
}

function isPalindrome(str) {
    var reverse = reverseStr(str);
    return str === reverse;
}

function converDateToString(date) {
    var dateStr = {
        day: "",
        month: "",
        year: "",
    };

    if (date.day < 10) {
        dateStr.day = "0" + date.day.toString();
    } else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = "0" + date.month.toString();
    } else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr;
}

function getAllDateFormat(date) {
    var dateStr = converDateToString(date);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllFormats(date) {
    var listOfPalindromes = getAllDateFormat(date);

    var flag = false;

    for (var i = 0; i < listOfPalindromes.length; i++) {
        if (isPalindrome(listOfPalindromes[i])) {
            flag = true;
            break;
        }
    }
    return flag;
}

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }

    return false;
}

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year,
    };
}

function getNextPalindromeDate(date) {
    var ctr = 0;
    var nextDate = getNextDate(date);

    while (1) {
        ctr++;
        var isPalindrome = checkPalindromeForAllFormats(nextDate);

        if (isPalindrome) {
            break;
        }

        nextDate = getNextDate(nextDate);
    }

    return [ctr, nextDate];
}

function clickHandler(e) {
    bdayStr = dateOfBirth.value;

    if (bdayStr !== "") {
        var formattedDate = bdayStr.split("-");
        var date = {
            day: Number(formattedDate[2]),
            month: Number(formattedDate[1]),
            year: Number(formattedDate[0]),
        };
        var isPalindrome = checkPalindromeForAllFormats(date);
        if (isPalindrome) {
            result.innerText = "Yay, your birthday is a palindrome!! 🥳🥳🥳";
            result.style.border = "1px solid black";
            result.style.backgroundColor = "#212b28";
        } else {
            var [ctr, nextDate] = getNextPalindromeDate(date);
            result.style.border = "1px solid black";
            result.style.backgroundColor = "#212b28";
            result.innerText = `Sorry, your birthday is not a palindrome 🥺🥺. \n
                                Next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr} days.`;
        }
    } else {
        result.style.border = "1px solid black";
        result.style.backgroundColor = "#212b28";
        result.innerText = "🙄🙄 You need to enter a valid date....";
    }
}

checkBtn.addEventListener("click", clickHandler);