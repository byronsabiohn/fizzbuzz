var numeros = 100;
var divisible = false;


for (var i = 1; i <= 100; i++)
{
    if(i % 3 == 0)
    {
        document.write("Fizz");
    }
    else if(i % 5 == 0)
    {
        document.write("Buzz");
    }
    else
    {
        document.write(i);
    }
    document.write("<br/>");
}