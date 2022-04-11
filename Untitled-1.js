// Desenvolva uma lógica que dada um lista de inteiros de 1 a 100, percorra ela e caso o numero seja:
// * divisível por 3 imprima "fizz"
// * divisível por 5 imprima "buzz"
// * divisível por 3 e 5 imprima "fizz buzz"
// * caso nao entre nas regras acima, deverá imprimir o próprio número.
for (let index = 1; index <= 100; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log(`${index}: fizz buzz`);
  } else if (index % 5 === 0) {
    console.log(`${index}: buzz`);
  } else if (index % 3 === 0) {
    console.log(`${index}: fizz`);
  } else {
    console.log(index);
  }
}
