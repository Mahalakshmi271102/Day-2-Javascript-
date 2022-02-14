//5 subjects marks

var sub1= 90;
var sub2= 85;
var sub3= 95;
var sub4= 80;
var sub5= 97;

// percentage and grade

var total=sub1+sub2+sub3+sub4+sub5;   

var per=total/5;                      

console.log(per);

if (per>90){                          
    console.log("O grade")
}
else if (per>80){
    console.log("A grade")
}
else if (per>70){
    console.log("B grade")
}
else if (per>50){
    console.log("C grade")
}
else{
    console.log("FAIL")
}

// Table of 5 using for loop

for(i=1; i<=10;){        
    val = i*5
    console.log(val)
    i++
}