console.log("Road Map Session Day 05 Activity task 1.2");
console.log(`Activity task link : https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit`);

console.log("----------IIFE function programs----------");
console.log("----------1a. Print odd numbers in an array----------")
var oddarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function oddfn(arr) {
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
    console.log(`odd numbers in the given array : ${e}`);
}(oddarr));

console.log("----------1b. covert all the strings to title caps in a string array----------");
titlarr = ["quick", "red", "green", "blue"];
(function titlecapsfn(arr) {
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
    console.log(`titlecased array values : ${tlurcsarr}`);
}(titlarr));

console.log("----------1c. sum of numbers in an array----------");
var sumarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function sumfn(arr) {
    console.log(`Given array : ${arr}`);
    var a = 0;
    for (i = 0; i < arr.length; i++) {
        var c = +arr[i];
        a = a + c;
    }
    console.log(`sum of numbers in the given array : ${a}`);
}(sumarr));

console.log("----------1d. return prime numbers in an array----------")
var prmarr = [08, 13, 23, 37, 45, 58, 63, 73, 81, 97]; // prime numbers array
(function prmfn(arr) {
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
}(prmarr));

console.log("----------1e. return palindromes in an array----------");
plnarr = [11, 869, "wow", true, "malayalam"];
(function plndrm(arr) {
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
}(plnarr));

console.log("----------1f. Return median of two sorted arrays of the same size----------");
var medarr1 = [1, 21, 71, 8, 31, 40, 9, 6];
var medarr2 = [1, 56, 31, 8, 27, 4, 93];
(function median(arr1, arr2) {
    function compareNumbers(a, b) {
        return a - b;
      }
    console.log("Given array :", arr1)
    sorarr1 = arr1.sort(compareNumbers);
    console.log("sorted array :", sorarr1);
    idx = (sorarr1.length / 2);
    // console.log(idx);
    if (idx % 2 == 0) {
        // console.log(sorarr1[idx-1], sorarr1[idx]);
        medn = (sorarr1[idx - 1] + sorarr1[idx]) / 2;
        console.log("Median of the given array is ", medn);
    } else {
        console.log("Median of the given array is ", sorarr1[idx - 0.5]);
    }
    console.log("Given array :", arr2)
    sorarr2 = arr2.sort(compareNumbers);
    console.log("sorted array :", sorarr2);
    idx = (sorarr2.length / 2);
    // console.log(idx);
    if (idx % 2 == 0) {
        // console.log(sorarr2[idx-1], sorarr2[idx]);
        medn = (sorarr2[idx - 1] + sorarr2[idx]) / 2;
        console.log("Median of the given array is ", medn);
    } else {
        console.log("Median of the given array is", sorarr2[idx - 0.5]);
    }
}(medarr1, medarr2));

console.log("----------1g. Remove duplicates from an array----------");
var duparr = ["Ironman", "Superman", "Ironman", "Superman",];
(function duplarr(arr) {
    console.log("Given array : ", arr);
    newarr = []; // Not to edit the original array, values are pushed into new array
    arr.forEach((val) => {
        newarr.push(val);
    })
    // console.log(newarr);
    newarr.sort()
    // console.log(arr.sort());
    for (i1 = newarr.length - 1; i1 > 0; i1--) {
        // console.log(i1, i1 - 1);
        // console.log(newarr[i1], newarr[i1 - 1]);
        if (newarr[i1] == newarr[i1 - 1]) {
            newarr.splice(i1, 1);
        }
    }
    console.log("Array after removing duplicates : ", newarr);
}(duparr));

console.log("----------1h. rotate an array by k times----------");
var rotaarr = ["Ironman", "Superman", "Spiderman", "Batman", "Antman"];
(function arrayrotation2(arr, k) {
    console.log(`Given array values are ${arr}`)
    var rotarr = []; // Not to edit the original array, values are pushed into new array
    arr.forEach((val) => {
        rotarr.push(val);
    })
    // console.log(rotarr);
    for (let i = 0; i < k; i++) {
        rotarr.push(rotarr.shift());
        // rotarr.unshift(rotarr.pop());
    }
    console.log(`${k} times rotated array values are ${rotarr}`);
}(rotaarr, 2));