function getMonth(array) {
    array[0] = "Jan";
    array[1] = "Feb";
    array[2] = "Mar";
    array[3] = "Apr";
    array[4] = "May";
    array[5] = "Jun";
    array[6] = "Jul";
    array[7] = "Aug";
    array[8] = "Sep";
    array[9] = "Oct";
    array[10] = "Nov";
    array[11] = "Dec";

    var d = new Date();
    return month[d.getMonth()];
}

var x = 0;
var remaining;
var month = new Array();
var text = "July 8, 2012"

var userMonth = text.substr(0, 3);
var todayMonth = getMonth(month);
var firstMonth = month.indexOf(userMonth);
var lastMonth = month.indexOf(todayMonth);

if (firstMonth > lastMonth) {
    month.reverse()
}

if (lastMonth == 11) {
    remaining = month.slice(firstMonth, lastMonth)
} else {
    remaining = month.slice(firstMonth)
}

for(i=0;i<month.length;i++) {
    var checker = month.pop()
    switch (checker)
    {
        case "Jan":
            x=x+31;
            break;
        
        case "Feb":
            x=x+28.25;
            break;
        
        case "Mar":
            x=x+31;
            break;
        
        case "Apr":
            x=x+30;
            break;
        
        case "May":
            x=x+31;
            break;

        case "Jun":
            x=x+30;
            break;

        case "Jul":
            x=x+31;
            break;

        case "Aug":
            x=x+31;
            break;

        case "Sep":
            x=x+30;
            break;

        case "Oct":
            x=x+31;
            break;

        case "Nov":
            x=x+30;
            break;

        case "Dec":
            x=x+31;
            break;

        default:
            x=x+30
    }
}

write(x)