// RECURSIVIDADE
function fatorial(n) {
    if(n == 1){
        return 1 // caso base
    }else {
        return n * fatorial(n - 1) // chamada recursiva. Acontecerá até chegar no caso base.
    }
}

console.log(fatorial(5))



/*
5! = 5 x 4 x 3 x 2 x 1 = 120
4! = 4 x 3 x 2 x 1 = 24 
 ENTÃO 5! = 5 x 4!

 n! = n x (n-1)!
 1! = 1
*/