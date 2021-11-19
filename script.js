// function documentReady(){
//     console.log('fiting document ready');
// }
// console.log("I am  in the global scope");
// document.addEventListener("DOMContentLoaded", documentReady);












//define and array using square brakets
// Function to reverse string
function reverseThisString(str) {
    return str.split('').reverse().join('')
 }
   
 // Function call 
 document.write(reverseThisString("Hello" ))
 document.write("<br>");
 document.write("<br>");
/********************************************************************* */


 // Function to convert characters
// of a string to opposite case
function swapCase(str)
{
    var ln = str.length;
 
    // Conversion according to ASCII values
    for (var i = 0; i < ln; i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
            // Convert lowercase to uppercase
            document.write(
            String.fromCharCode(str.charCodeAt(i) - 32)
            );
        else if (str[i] >= 'A' && str[i] <= 'Z')
            // Convert uppercase to lowercase
            document.write(
            String.fromCharCode(str.charCodeAt(i) + 32)
            );
    }
}
 
// Driver function
var str = " \nHello World" ;
 
    // Calling the Function
    swapCase(str);
    document.write("<br>");
    document.write("<br>");
    


/********************************************************************* */
    function toCelcius(array) {
        return array.map(              // for every value in the array
          function(temp) {            // run this function
            return (temp - 32) * 5 / 9
          }
        );
      }
      
      var array = [23, 32, 41, 50, 59];
      var result = toCelcius(array);
      document.write(result);
      document.write("<br>");
      document.write("<br>");
     
/********************************************************************* */
    function passOrFail(array) {
        return array.map(score => score >= 75);
    }
    var array = [20, 30, 50, 80, 90, 100];
    var result = passOrFail(array);
    document.write(result);
    document.write("<br>");
    document.write("<br>");

    // Testing the function here
    /********************************************************************* */
    function germanNumbers(){
        // two arrays
        const cardinalNumbers = [2,3,4,5,6];
        const germanNumber = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
        
        // define new Array
        var newArray = new Array();
        
        // using forEach iterate through the cardinalNumbers
        cardinalNumbers.forEach((num, i) => {
            // and using the index access the germanNumber
          const german = germanNumber[i];
          // and push the cardinalNumbers is germanNumber format
          newArray.push(num + ' is ' + german);
        });
        
        // return the newArray.
        return newArray;
        
        }
        var result = germanNumbers();
        // print the array.
        //console.log(germanNumbers());
        document.write(result);
        document.write("<br>");
    
    /***********************************!!!!!!!!!!!!!********************************** */
  

    //    write code that returns an array of ONLY prime numbers 
    //that are in the array numbers

    // for (var i=1; i<=100; i++){ 
    //     (function FizzbuzzHelper(){ 
    //     var n = i;
    //         if (n%15==0){
    //             console.log("FizzBuzz");
    //         }
    //         else if (n%5==0){
    //             console.log("Buzz");
    //         }
    //         else if (n%3==0){                 
    //             console.log("Fizz");   
    //         }
    //         else{
    //             console.log(n);
    //         }
    //     })();
    // };
        // calling returnPrimeNumbers
//         var result = fizzBuzz(num);
// document.write(result);
//console.log("***Showing numbers***");
          /*********************************************************************** */

          function csc225Rules() {
            // loop till i is less than equal 100
            for(var i = 1; i <=100; ++i){

                if(i % 15 === 0){
               
                       // console.log('Fizz Buzz');
                       document.write('Fizz Buzz');
                       document.write('<br/>');
               
                   }else if(i % 3 === 0){
               
                       // console.log('Fizz');
                       document.write('Fizz');
                       document.write('<br/>');
               
                   }else if(i % 5 === 0){
               
                       // console.log('Buzz');
                       document.write('Buzz');
                       document.write('<br/>');
               
                   }else{
               
                       // console.log(i);
                       document.write(i);
                       document.write('<br/>');
                   }
               }
               
            // calling csc225Rules
           var result = csc225Rules();
    // print the array.
   // console.log(germanNumbers());
    document.write(result);
    document.write("<br>");        
        }
    


    
   
