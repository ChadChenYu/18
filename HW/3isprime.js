function isprime(n) 
{
    
    if (n <= 1)
    {
        return false;
    }
    for (var i = 2; i < n; i++) 
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return true;
}

console.log(isprime(3))
