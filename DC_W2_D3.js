var arr = [5,0,9,1,7,4,2,6,3,8]; // initial array
const arrSize = arr.length; // initial size of initial array => should not change to avoid infinite loop
var arr2 = []; // a new array to store sorted data
var max = arr[0]; // init max value on 1st element
var idx = 0; // init of element index
var bool = Boolean(1<0); // init boolean set to false

for (var j = 0; j < arrSize; j++)
{
   for(var i = 0; i < arr.length+1; i++) 
   
   {
      if(arr[i] > max) // if current element > current max value
      
      {
         max = arr[i];
         idx = i ;
         bool = true; // set boolean to true
      }
       
   }

if (bool = false) {arr[0]=max;idx=0;} // if no other max element found, max element is the 1st element

arr2.push(max); // push max element in a new array
arr.splice(idx,1); // remove max element from initial array to enable sort continuation on remaining values
max = arr[0]; // reinitialization of max value
bool = false; // reinitialization of boolean
idx = 0; // reinitialization of index element
}
