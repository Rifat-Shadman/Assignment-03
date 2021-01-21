//


//kilometerToMeter

function kilometerToMeter(kilometer){
    if(kilometer<0) return "Distances cannot have negative value";
    else return kilometer*1000;
}

// budgetCalculator

function budgetCalculator(clock,phone,laptop){
    if(clock<0 || phone < 0 || laptop < 0) return "Negative values cannot be processed";
    var clockPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    return clock * clockPrice + phone * phonePrice + laptop * laptopPrice;
}


// hotelCost

function hotelCost(days){
    if(days < 0) return "Negative values cannot be processed";
    var firstTenDayCost = 100;
    var secondTenDayCost = 80;
    var extraCost = 50;

    var extraDay = Math.max(0,days-20);
    var secondTen = Math.max(0, days-extraDay - 10);
    var firstTen = days - extraDay- secondTen; 
    
    var totalCost = (firstTen * firstTenDayCost) + (secondTen* secondTenDayCost) + (extraDay * extraCost);
    return totalCost;
}



// megaFriend

function megaFriend(friendsArray){
    if(friendsArray.length == 0) return "The input array is empty. Make some friends.";
    
    var biggestName;
    var biggestNameLength = 0;
    for(var i=0; i<friendsArray.length; i++){
        if(typeof(friendsArray[i]) != String) return "The array has other data types than string."
        if(biggestNameLength < friendsArray[i].length){
            biggestName = friendsArray[i];
            biggestNameLength = friendsArray[i].length;
        }
    }
    return biggestName;
}


