function matrixmul(a, b)
{
    var result = [];
    for(var i = 0; i < a.length; i++)
    {
        var row = [];
        for(var j = 0; j < b[0].length; j++)
        {
            var sum = 0;
            for(var k = 0; k < a[0].length; k++ )
            {
                sum += a[i][k] * b[k][j];
            }
            row.push(sum);
        }
        result.push(row);

    }
    return result;
}
var matrixA = [[1,2,3],[4,5,6],[7,8,9]];
var matrixB = [[3,2,1],[6,5,4],[9,8,7]];

console.log(matrixmul(matrixA,matrixB));