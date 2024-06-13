function vectoradd(a,b,c,d)
{
    var resultX,resultY;
    resultX = a + b;
    resultY = c + d;
    return [resultX,resultY];
}

var result = vectoradd(1,2,3,4);
console.log(result);
