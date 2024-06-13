function weekday(str)
{
    switch(str.toLowerCase())
    {
        case 'sunday':
        return 0;
        case 'monday':
        return 1;
        case 'tuesday':
        return 2;
        case 'wednesday':
        return 3;
        case 'thurday':
        return 4;
        case 'friday':
        return 5;
        case 'saturday':
        return 6;
     }
}
console.log(weekday('saturday'));
