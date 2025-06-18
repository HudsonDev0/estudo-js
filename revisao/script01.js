let x = 4;
x **= 3; // 64
x -= 14 // 50
x /= 5 // 10
x -= 1 // 9
x += 7 // 16
x *= 4 // 64
x %= 3 // 1

console.log(`x é igual a: ${x}`);

/*
     Quando você usa "!" é porque você quer a negação de algo. Se algo é !true, então é falso.
Vou falar só sobre esse na revisão, pois é o que mais causou confusão pra mim.

*/

/*
    O sinal de "==" ele testa a igualdade, porém não testa o tipo. Sendo assim... Observe:
    n = 5;
    s = '5';
    Se você fizer esse teste n == s, dará true. Mesmo que "s" seja uma string. Agora... se você fizer:
    n === s, dará false. O sinal "===" testa tando a igualdade do dado quanto o tipo.

 */

n = 5;
s = '5';

console.log(`Testando o operador ==: n == s?  ${n == s}`);
console.log(`Testando o operador ===: n === s?  ${n === s}`);


/*
    Ordem dos operadores: 
     1 - Aritméticos: +; -; *; /; %; **.
     2 - Relacionais: >; <; <=; >=; !=.
     3 - Lógicos: &&; ||; !.

     Se uma expressão houver os 3 operadores, eles serão resolvidos na ordem proposta acima.
*/

/*
    -------------Operador ternário:--------------
    
      ?: --> funcionamento: X >= 7?"true";"false" --> media >= 7?"Aprovado";"Reprovado".
 */