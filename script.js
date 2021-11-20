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
  

    //    write code that returns an array of ONLY prime numbers that are in the array numbers

    function returnPrimeNumbers(){
        const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        
        var result = [];
        var k = 0;
        
        for(var i = 0;i<numbers.length;i++){
            
            var isPrime = true;
            
            for(var j = 2;j<numbers[i];j++){
            
                if(numbers[i]%j==0){
                    isPrime = false;
                }
            }
            
            if(isPrime){
                if(numbers[i]!=1){
                    result[k] = numbers[i];
                    k++;
                }
            }
        }
        return result;
    
    }
    returnPrimeNumbers();
          /*********************************************************************** */

          function printMultiples() {
            for (let i = 1; i <= 100; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    console.log("CSC225 RULES I LOVE JAVASCRIPT");
                } else if (i % 3 === 0) {
                    console.log("CSC225 RULES");
                } else if (i % 5 === 0) {
                    console.log("I LOVE JAVASCRIPT");
                } else {
                    console.log(i);
                }
            }
        }
        
        printMultiples();
    // print the array.
    // document.write(result);
    // document.write("<br>");        
    //     }
    


    
   
