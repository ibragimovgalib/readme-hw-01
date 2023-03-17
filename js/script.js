// Task 1___________________________________
function circuitPower(voltage, current){
    return voltage*current
}
console.log(circuitPower(230, 10));

// Task 2___________________________________
function divisibleByFive(a){
    if (a%5==0) return true;
    else return false
}
console.log(divisibleByFive(5));

// Task 3___________________________________
function divisedEvenly(a,b){
    if(!(a%b)) return true;
    else return false;
}
console.log(divisedEvenly(85,4));

// Task 4___________________________________???

// Task 5___________________________________
function isSameNum(a,b){
    if(a==b) return true;
    else return false;
}
console.log(isSameNum(2,2));

// Task 7___________________________________
function Potatoes(a){
    return -a;
}
console.log(Potatoes(3));

// Task 8___________________________________
function longestTime(a,b,c){
    if(a*3600 >= b*60 && a*3600 >= c) return a;
    else if (b*60 >= a*3600 && b*60 >= c) return b;
    else return c;
}
console.log(longestTime(1,300,15000));

// Task 9___________________________________
function largestSwap(a){
    if(a/10 >= a%10) return true;
    else return false;
}
console.log(largestSwap(53));

// Task 10__________________________________
function solveForExp(a, b) {
  let s = 0;
  for (let i = 1; Math.pow(a, i) <= b; i++) {
    if (Math.pow(a, i) >= b) break;
    s++;
  }
  return s;
}
console.log(solveForExp(2, 16));

// Task 1_________________________________________
function century (a){
    return Math.ceil(a/100);
}
console.log(century(1705));

// Task 2_________________________________________
function convert(m){
    return m*60;
}
console.log(convert(3));

// Task 6_________________________________________
function even(a,b){
    for(let i=a;i<=b;i++){
        if (i%2==0) console.log(i);;
    }
}
even(2, 10);

// Task 7_________________________________________???
function evenSqrt(a, b){
    for(let i=a;i<=b;i++){
        if(Math.sqrt(i)==i*i) console.log(i)
    }
}
evenSqrt(2,40);
