const tomb = [12, 23, 34];

for (let index = 0; index < tomb.length; index++) {
  console.log(tomb[index]);
}

tomb.forEach(function(tombelem, index){
    console.log(index + ": " + tombelem);
    tombelem++;
});
console.log(tomb);
