console.log("Road Map Session Day 05 Activity task 3")
console.log(`Activity task link : https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit`);

console.log("----------3. Programs in arrow function----------")

console.log("----------3a. Print odd numbers in an array----------")
let oddarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddfn = (arr) => {
    console.log(`Given array : ${arr}`);

    var d = [];
    var e = [];
    for (i = 0; i < arr.length; i++) {
        var c = arr[i] % 2;
        if (c == 0) {
            d.push(arr[i]);
        } else {
            e.push(arr[i]);
        }
    }
    // console.log(`Even numbers in the given array are : ${d}`);
    console.log(`Odd numbers in the given array : ${e}`);
}
oddfn(oddarr);

console.log("----------3b. covert all the strings to title caps in a string array----------")
titlarr = ["quick", "red", "green", "blue"]
var titlecapsfn = (arr) => {
    console.log(`Given array : ${arr}`)
    tlurcsarr = [];
    for (i = 0; i < arr.length; i++) {
        arrval = arr[i].split("")
        // console.log(arrval);
        urcs = arrval[0].toUpperCase();
        // console.log(urcs);
        arrval.shift()
        // console.log(arrval);
        arrval.unshift(urcs);
        // console.log(arrval);
        tlturcs = arrval.join("")
        tlurcsarr.push(tlturcs);
    }
    console.log(`Titlecased array values : ${tlurcsarr}`);
}

titlecapsfn(titlarr);

console.log("----------3c. sum of numbers in an array----------")
let sumarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumfn = (arr) => {
    console.log(`Given array : ${arr}`);
    var a = 0;
    for (i = 0; i < arr.length; i++) {
        var c = +arr[i];
        a = a + c;
    }
    console.log(`sum of numbers in the given array : ${a}`);
}
sumfn(sumarr);

console.log("----------3d. return prime numbers in an array----------")
let prmarr = [08, 13, 23, 37, 45, 58, 63, 73, 81, 97]; // prime numbers array
var prmfn = (arr) => {
    console.log(`Given array : ${arr}`);
    let i1;
    let i2;
    let b;
    let pr = [];
    let npr = [];
    for (i1 = 0; i1 < arr.length; i1++) {
        b = 1;
        for (i2 = 2; i2 < arr[i1] && b > 0; i2++) {
            b = arr[i1] % i2;
        }
        if (b == 0) {
            npr.push(arr[i1]);
            // console.log(`${arr[i1]} is divided by ${i2-1}`)
        } else {
            pr.push(arr[i1]);
        }
    }
    console.log(`prime numbers in the given array : ${pr}`);
    // console.log(`Non prime numbers in the given array are ${npr}`);
}
prmfn(prmarr);

console.log("----------3e. return palindromes in an array----------")
var plndrm = (arr) => {
    console.log(`Given array : ${arr}`)
    let i1;
    let i2;
    plnval = [];
    nnplnval = [];
    for (i1 = 0; i1 < arr.length; i1++) {
        arvl = arr[i1].toString();
        // console.log(arvl);
        // console.log(typeof arvl);
        b = arvl.split("");
        // console.log(b);
        c = [];
        for (i2 = b.length - 1; i2 >= 0; i2--) {
            c.push(b[i2]);
        }
        var arvlrv = c.join("");
        // console.log(arvlrv);
        if (arvl == arvlrv) {
            plnval.push(arvl);
        } else {
            nnplnval.push(arvl);
        }
    }
    console.log(`palindromes values in the given array : ${plnval}`);
    //  console.log(`Non palindromes values in the given array are ${nnplnval}`);
}
plnarr = [11, 869, "wow", true, "malayalam"]
plndrm(plnarr);