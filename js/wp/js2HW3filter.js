function filter(a, f)
{
    var result = []
    for(var i = 0;i < a.length;i++)
    {
        if(f(a[i]))
        {
            result.push(a[i]);
        }
    }
    return result;

}

var array=[1,2,3,4,5,6,7,8,9,0];
var filteredArray = filter(array, function(x)
{
    return x % 2 == 1;
})

console.log(filteredArray);