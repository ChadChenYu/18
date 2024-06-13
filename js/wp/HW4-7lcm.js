function gcd(m, n)
{
    if(n == 0)
    {
        return m;
    } else
    {
        return gcd(n, m % n );
    }
}

function lcm(m, n)
{
    var result = (m*n)/gcd(n, m % n);
    return result;
}
console.log(lcm(11,15));
