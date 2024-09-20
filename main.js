//array multipal user ki deail k liy use hota []is main bnta\
//is ki counting o sy start hoti hy
var school = ["id1", "id2", "id3"];
console.log(school[2]);
var array1 = [2, 6, 7];
console.log(array1);
//  array ki value change nhi hoti is trhn hogi
array1[0] = 100;
console.log(array1);
// dosra trky array
var array2 = [6, 8, 9];
//3rd tareka array ka empty array
var array3 = [];
array3.push(2, 4, 5, 6, 7, 8); //.push valu add krta
console.log(array3);
var number = array3.pop(); //.pop last value remove krta jese 5 remove kr k 
//answer 2,4 dia jo remove hogi ossy varable my store krway gy
console.log(number);
console.log(array3);
// .shift remove krta first value array ki
var removeElement = array3.shift();
console.log(removeElement);
console.log(array3);
//.unshift start main add kr dy ga
array3.unshift(30);
console.log(array3);
//.slice koch hissa array ka or ye 0 sy start hoti counting
//                    0        1        2       3        4
//hum 1,3 likhy gy to 3 print nhi hoiga 1,2 hoga ye chnge nhi kr skta value ko
var array4 = ["apple", "mango", "grapes", "banana", "kiwi"];
console.log(array4);
console.log(array4.slice(1, 3));
//.splice ye chnge kar leta hy 
var array5 = ["pen", "pencil", "reser", "markel", "cutmarkel"];
console.log(array5);
array5.splice(1, 2, "pencilbox", "colourpencil");
console.log(array5);
