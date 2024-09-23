 var s1="Hello All"
 console.log("String s1 is:- ",s1);
 console.log("String length using Length method:-",s1.length);
 console.log("Using Index consoling the last letter of the s1:-", s1[s1.length-1]);
 
 console.log("String converted to LowerCase using toLowerCase:-",s1.toLowerCase( ));
 console.log("String converted to LowerCase using toUpperCase:-",s1.toUpperCase( ));
 let s2=" I'm Eindhu"
//  let s3="How are you All"
console.log("-----concat Method-------");
console.log("String s2 is:-",s2);
console.log("Concatina a string using concat Method:-",s1.concat(s2));

console.log("-------charCodeAt Method--------");
console.log("chatCodeAt method on s1:-",s1.charCodeAt(6));
console.log("---charCodeAt usually console the ASCII values of the Characters--");
console.log("when i give out of index value , index value as 24:-",s1.charCodeAt(24));
console.log("when i give negative index value to the chatCodeAt Method s1.charCodeAt(-8)):--",s1.charCodeAt(-8));
console.log("when i give negative index value to the chatCodeAt Method which is out of index value i.e 24:--",s1.charCodeAt(-24));
console.log("when 2 index values given to chatCodeAt Method for s1 String:-",s1.charCodeAt(0,3));
console.log("only console the first index ASCII value");

console.log("---------chatAt Method-------");
console.log("charAt method on s1 index value is-6:-",s1.charAt(6));
console.log("--chatAt method usually console the index position of a character--");
console.log(s1.charAt(23));
console.log("I given the 23 as Index value but the length of s1 string is 9  so it consoles the space ");
console.log(s1.charAt(-8));
console.log(s1.charAt(-20));
console.log("---whenever Negative Index given chatAt method it console but return Nothing so chatAt method only applied for positive Index--");
console.log("for chatAt method I have given 2 index as chatAt(6,4) but the method console the first Index:-",s1.charAt(6,4));

console.log("------trim Method-------");
let a1="   Trim Method Start  ";
let a2="Trim Method End    ";
let a3="    Trim Method    "
console.log("String a1:-",a1);
console.log("String a2:-",a2);
console.log("String a3:-",a3);
console.log("trimStart method on a1 string:-",a1.trimStart());
console.log("trimEnd method on a2 String:-",a2.trimEnd());
console.log("trim method on a3 String:-",a3.trim());

console.log("------Slice------");
let slc="Hi a warm Welcome To all";
console.log("slice method by 1 positive index value:-",slc.slice(5));
console.log("slice  by 2 positive index values:-",slc.slice(5,8));
console.log("slice by  index values:-",slc.slice(2,2,9));
console.log("consoliing 1st value as starting index and 2nd value as ending index(n-1)");
console.log("negative Indexing(-5) to slice method:-",slc.slice(-5));
console.log("2 negative values to slice(-5,-2):-",slc.slice(-5,-2));
console.log("when i slice 0 ,-5:--",slc.slice(0,-5));
console.log("when i slice -2 ,-5:--",slc.slice(-2,-5));

console.log("--------String[]-------");
let m1="butterfly";
console.log("string:--",m1);
console.log("m1[1]:--" ,m1[1]);
console.log("m1[-5]:--", m1[-5]);
console.log("m1[3,6]:--", m1[3,6], "             -cosoles the last index value-");
console.log("m1[-3,-8]:--",m1[-3,-8]);

console.log("-----Sting at Method------");
let m2="catterpiller";
console.log("(string:--",m2);
console.log("m2.at(5):-", m2.at(5));
console.log("m2.at(-5):-", m2.at(-5));
console.log("m2.at(-5,-3):-", m2.at(-5,-3),"     consoles starting index");
console.log("m2.at(-3,-5):-", m2.at(-3,-5),"     consoles starting index");

console.log("m2.at(7,9):-", m2.at(7,9),"     consoles starting index");





