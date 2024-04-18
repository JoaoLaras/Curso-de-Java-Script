let amigo = {nome: 'Joao', sexo: 'M', peso: 92.00, engordar(p=0){
    console.log('Engordou')
    this.peso += p
} }

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)       

