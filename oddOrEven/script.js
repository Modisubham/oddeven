function predict()
{
    var x= document.getElementById("number").value;
    if(x%2==0)
    {
        document.getElementById("text").innerHTML =("the Number "+ x +" is even");
    }
    else{
        document.getElementById("text").innerHTML =("the Number "+ x +" is odd");
    }
}