let vet = [4,3,8,9,6]
vet[5] = 1
vet.push(20)
vet.sort()

console.log(`Nosso vetor é o ${vet} `)
console.log(`Nosso vetor tem ${vet.length} posicoes `)
console.log(`Nosso vetor na posicao 0 é ${vet[0]}`) 
console.log(vet[3])
console.log('---------------------------------------')

let valores = [8, 1, 7, 4, 2, 9]
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log('---------------------------------------')
for(let pos=0; pos < valores.length; pos++ ) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
    
}
console.log('---------------------------------------')

for(let pos in valores) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

let vet1 = [4,3,8,9,6]
let posic = vet1.indexOf(8)
let posic1 = vet1.indexOf(10)
console.log(posic)
console.log(posic1)