let szoveg = "Helló!"; //globális változó

/*var - globális --> function */
/*let - globális --> blokk */
function koszon() {
  /*/var szoveg="hahó!";*/ //lokális változó
  {
    let szoveg = "hahó!";
    let a = 2;
  }
  /*console.log(a);*/
  /*console.log(szoveg);*/
}

/*console.log(szoveg);*/
koszon("Halihó");

/*console.log(index);*/

/**TÖMBÖK */

let tomb = [12, 13, 14, 15];
let a = 3;

function kiir(belsoTomb, a) {
  belsoTomb[0] = 11111;
  belsoTomb = [12, 23];
  a = 3333;
  console.log("belső a: " + a);
  console.log("belső tömb: " + belsoTomb);

  for (var index = 0; index < 5; index++) {
    console.log(index);
  }
  console.log(index);
}

kiir(tomb, a);
console.log("külső a: " + a);
console.log("külső tömb: " + tomb);

const konstans = 2;
const konstantTomb = [23,34,45,56];
konstantTomb[0]=111111;

function masik(belsotomb2){
    belsotomb2[2] = 234567;
}
masik(konstantTomb);

console.log(konstantTomb);


const szemelyObj = {
    nev:"Béla",
    kor: 12
}
