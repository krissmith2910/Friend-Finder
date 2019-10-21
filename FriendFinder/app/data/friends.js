<<<<<<< HEAD

//module.exports = function() { var user1 = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
var friends = [
 { name: "sid", scores: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1] },
 { name: "nancy", scores: [5, 1, 5, 5, 1, 1, 1, 1, 4, 2] }
];
// var closestMatchVal = null;
// var closestMatchFriend = null;
// //console.log(user1[0]);
// for (var i = 0; i < friends.length; i++) {
//  var scores = friends[i].scores
//  var valDiffs = []
//  // let valDiffTotal = friends[i].scores
//  //   .map((score, j) => Math.abs(score - user1[j]))
//  //   .reduce((runTotal, nextVal) => runTotal + nextVal, 0);
//  for (j = 0; j < scores.length; j++) {
//    valDiffs.push(Math.abs(scores[j] - user1[j]));
//  }
//  console.log(valDiffs);
//  var valDiffTotal = valDiffs.reduce(function(a,b){return a + b},0);
//  console.log(valDiffTotal);
//  if (!closestMatchVal) {
//    closestMatchVal = valDiffTotal;
//    closestMatchFriend = i;
//  } else if (valDiffTotal < closestMatchVal) {
//    closestMatchVal = valDiffTotal;
//    closestMatchFriend = i;
//  }
//  };
// }
module.exports = friends;
// console.log(friends[closestMatchFriend].name);
// console.log(closestMatchVal);
=======
module.exports = function() {
  var user1 = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
  var friends = [
    { name: "sid", scores: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1] },
    { name: "nancy", scores: [5, 1, 5, 5, 1, 1, 1, 1, 4, 2] }
  ];
  var closestMatchVal = null;
  var closestMatchFriend = null;
  //console.log(user1[0]);
  for (var i = 0; i < friends.length; i++) {
    var scores = friends[i].scores;
    var valDiffs = [];
    // let valDiffTotal = friends[i].scores
    //   .map((score, j) => Math.abs(score - user1[j]))
    //   .reduce((runTotal, nextVal) => runTotal + nextVal, 0);
    for (j = 0; j < scores.length; j++) {
      valDiffs.push(Math.abs(scores[j] - user1[j]));
    }
    //console.log(valDiffs);
    var valDiffTotal = valDiffs.reduce(function(a, b) {
      return a + b;
    }, 0);
    //console.log(valDiffTotal);
    if (!closestMatchVal) {
      closestMatchVal = valDiffTotal;
      closestMatchFriend = i;
    } else if (valDiffTotal < closestMatchVal) {
      closestMatchVal = valDiffTotal;
      closestMatchFriend = i;
    }
  }
  //console.log(friends[closestMatchFriend].name);
  //console.log(closestMatchVal);
return {friend: friends[closestMatchFriend].name}

};
>>>>>>> 5da9fca25e5d6f316ebc9aa04666516f7d6cc0fb
