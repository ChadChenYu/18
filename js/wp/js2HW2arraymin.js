function arraymin(a)
{
    if(a.length === 0)
    {
        return "the array is empty"
    }

    var min = a[0]

    for(var i = 1; i < a.length;i++)
    {
        if(a[i] < min)
        {
            min = a[i]
        }
    }
    return min
    
}

var array = [4,5,1,8,9];
console.log(arraymin(array));

