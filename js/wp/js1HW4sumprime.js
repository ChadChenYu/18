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

function sumprime(num) {
    var sum = 0;
    for (var i = 2; i <= num; i++) {
        if (isprime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumprime(10));
