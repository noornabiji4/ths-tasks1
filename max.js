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
