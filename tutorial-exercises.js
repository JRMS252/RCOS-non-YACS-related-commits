// Exercise 1: Sum All Elements of List

function sumlist(l) {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        sum += l[i];
    }
    return sum;
}

let num = sumlist([1,5,8,9,12,56])

writeln(num);

// Exercise 2: Get Largest Element of List

function getLargest(l) {
    let largest = l[0];
    for (let i = 0; i < l.length; i++) {
        if (l[i] > largest) {
            largest = l[i];
        }
    }
    return largest;
}

let num2 = getLargest([6,9,22,-1,-10, 888, 4])

writeln(num2);

// Exercise 3: Remove Element from String

function removeElement(e, s) {
    return s.split(e).join('');
}

let s1 = "hello";

let s2 = removeElement("l", s1);

writeln(s2);

// Exercise 4: Reverse a String

function reverse(s) {
    let s2 = "";
    for (let i = s.length - 1; i > -1; i--) {
        s2 += s[i];
    }
    return s2;
}

let str = "octopus";

let str2 = reverse(str);

writeln(str2);

// Exercise 5: Count Number of Digits in a Number

function numDigits(n) {
    let n2 = n.toString();
    let num = 0
    for (let i = 0; i < n2.length; i++) {
        num++;
    }
    return num;
}

let n = 79426;

writeln(numDigits(n));

// Exercise 6: Check if String is Palindrome

function isPalin(s) {
    let reversedStr = "";
    for (let i = s.length-1; i > -1; i--) {
        reversedStr += s[i];
    }
    return s === reversedStr;
}

let w1 = "tacocat";
let w2 = "dog";

writeln(isPalin(w1));
writeln(isPalin(w2));