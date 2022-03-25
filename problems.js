function pandaCost(singaraQuantity,chomochaQuantity,jilapiQuantity){
    const singaraPerPrice = 7 ;
    const chomochaPerPrice = 10;
    const jilapiPerPrice = 15;
    
    const singaraTotalPrice = singaraPerPrice * singaraQuantity;
    const chomochaTotalPrice = chomochaPerPrice * chomochaQuantity;
    const jilapiTotalPrice = jilapiPerPrice * jilapiQuantity;
    
    const total = singaraTotalPrice + chomochaTotalPrice + jilapiTotalPrice ;
    return total;
}
const result = pandaCost(5,0,1);
console.log(result);



function oddFriend(friends){
    for(const friend of friends){
        if(friend.length % 2 != 0){
            return friend;
        }
    }
}
const friendss = ['naim','tonmoy','hridoy','hamim','sojol','khair','bappy','sataj'];
const found = oddFriend(friendss);
console.log(found);


function findFriend(find){
    const founds = [];
    for(let i = 0 ; i<find.length; i++){
        const element = find[i];
        if(element.length >= 5 ){
            founds.push(element);
            
        }
    }
    return founds;
}
const friendsss =  ['naim','tonmoy','hridoy','hamim','sojol','khair','bappy','sataj'];
const results = findFriend(friendsss);
console.log(results);