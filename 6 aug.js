
   //javascript object notation that is jason
   //.map
   //time 
   /*va 
   let
   var
   const
   arry method
   time 
   intreo to es6*/

   /*var JSON=[{
   
   name: "Bangkok, Thailend",
   place: "Hydrabad",
   destination : "Thailend",
   date: "06 aug 2018",

     },
     {fg:dfdn,

	
     }];`12++
     37
     count no of string*/

/*var a='hello';
var s=0;
for (var i=0;i<a.length;i++){
	s += a[i]
	console.log(a);
}*/

/*const number=[1,2,25,1,5,51,5,412,5,13,2];
const odd=number.map(function(number){
	console.log(number % 2 != 0);
});
odd;*/
/*let hello="hello";
function str(){
	let hello="hi";
	console.log(hello);
}
str();
console.log(hello);*/
var a=[1,7,5,2,4,3,6,8,9];
function miniMaxSum(arr) {
    var max=0;
    var min=0;
    a.sort();
    for (var i=0;i<a.length-1;i++){
         min += a[i];
        max += a[i+1];
    }
console.log(min,max);
}
miniMaxSum();
