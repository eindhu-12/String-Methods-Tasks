var s1="   plants   "
var s2=s1.trim()
var s3=s2.length-1
var s4=" are grown"
console.log("string:--",s1);
console.log("trim method to string:--",s2);
console.log(s2[0].toUpperCase());
console.log(s2[s2.length-1].toUpperCase());
console.log("Making the first and last characters uppercase:-", 
    s2.charAt(0).toUpperCase() + s2.slice(1,s3)+s2[s2.length-1].toUpperCase());
var s5=s2.slice(2,6)
console.log("extracting a specific part of the string:--",s5);
console.log("extracted part concatenating with another string:--",s5.concat(s4));




