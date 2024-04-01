function year(n)
{
    if(n % 400 === 0)
    {
        return 366;
    } else if(n % 100 === 0)
    {
        return 365;
    } else if(n % 4 === 0)
    {
        return 366;
    } else
    {
        return 365;
    }

}
console.log(year(2004));