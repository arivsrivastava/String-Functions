let number;

window.onload = function() {
    document.getElementById("button").onclick = function() {
       number = document.getElementById("input").value
       console.log(number.length)
       for (var i=0;i<number.length/2;i++){
        console.log("value of i=" + i);
        console.log("value of number[i]=" + number[i]);
        console.log("value of number[number.length - 1 - i]=" + number[number.length - 1 - i]);

        if (number[i] != number[number.length - 1 - i]){
            document.getElementById("result").innerHTML = "This is not a palindrome.";
            return;
        }
       }
       document.getElementById("result").innerHTML = "This is a palindrome.";
    }
    document.getElementById("button1").onclick = function() {
        number = document.getElementById("input").value;
        var reverseStr = "";
        for (i=number.length-1;i>=0;i--){
            console.log("value of i=" + i);
            console.log("value of i=" + number[i]);
            reverseStr = reverseStr + number[i];
        }
        document.getElementById("result").innerHTML = reverseStr; 
    }
 
}
