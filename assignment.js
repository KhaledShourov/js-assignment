
//No-1: kilumitterToMetter convertion with function
function kilometterToMetter(kiloMitter) {
    const mitter = kiloMitter * 1000;
    return mitter;
}


 //Budget Calculator using JavaScript Function
 function budgetCalculator(clock, mobile, leptop) {
     let clockCost = 50 * clock;
     let mobileCost = 100 * mobile;
     let leptopCost = 500 * leptop;
     let totalCost = clockCost + mobileCost + leptopCost;
     return totalCost;
 }


// No-3 Hotel Cost JavaScript Program using function
function hotelCost(livingDay) {
    var cost = 0;
    if (livingDay <= 10) {
        cost = livingDay * 100;
    } else if (livingDay <= 20) {
        var tenDay = 10 * 100;
        var remaining = livingDay - 10;
        var twentyDay = remaining * 80;
        cost = tenDay + twentyDay;
    } else {
        var tenDay = 10 * 100;
        var twentyDay = 10 * 80;
        var remaining = livingDay - 20;
        var twentyDayPlus = remaining * 50;
        cost = tenDay + twentyDay + twentyDayPlus;
    }
    return cost;
}


//No-4: Find out the largest Name in the megaFriend
var friendName = megaFriend(["Abdul", "Moklis", " Barak Obama", "fox", "Akkas"]);
function megaFriend(array) {
    var largeName = "";

    array.forEach(function (friendName) {
        if (friendName.length > largeName.length) {
            largeName = friendName;
        }
    });

    return largeName;
}