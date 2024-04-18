function parimpar(n) {
    if (n%2==0) {
        return 'Par!'
    }
    else  return 'Impar!'
}

//let res = parimpar(10)
console.log(parimpar(11))
console.log('---------------')

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(2,10))
console.log('---------------')
let v = function(x){
return x*2
}
console.log(v(3))

console.log('---------------')

//5! = 5 x 4 x 3 x 2 x 1
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *=c
    }
    return fat
} console.log(fatorial(5))

console.log('---------------')

function fatorial(n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * fatorial(n-1)
    }
    
}
console.log(fatorial(5))