let a = 10;
if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 to 40");
} else if (a > 40) {
  console.log(" > 40");
} else {
    console.log("undefined");
}


a < 10 ? console.log(10) 
: a >= 10 && a<= 40 ? console.log("10 to 40") 
: a > 40 ? console.log("> 40") 
: console.log("Unknown");




let st = "Elzero Web School";


if ((st.length * 2).toString() === "34") {
    console.log("Good 1");
}

if (st.slice(st.search("W"),st.search("W") + 1).toLowerCase() === "w") {
    console.log("Good 2");
}


if (typeof st === "string") {
    console.log("Good 3");
}


if (`${typeof(Number (st))}` === "number") {
    console.log("Good 4");
}


if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good 5");
}
