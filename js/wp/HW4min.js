function min(m,n)
{
    if(m > n)
    {
        return n;
    } else if(n > m)
    {
        return m;
    } else if(m == n)
    {
       return "The number is equal";
    }
    
}

var result = min(20, 40);
console.log(result);
