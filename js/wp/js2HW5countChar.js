function countchar(str)
{
    var count  = []; // []創建一個叫做count的數列 {}物件
    for(var i = 0; i < str.length; i++)
    {
        let char = str[i];
        if(count[char])
        {
            count[char]++;
        } else
        {
            count[char] = 1;
        }
    }
    return count;
}
console.log(countchar('asdsasdadsa'));