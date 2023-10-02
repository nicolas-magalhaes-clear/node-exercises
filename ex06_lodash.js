const _ = require('lodash')


const alunos = [
    {
        nome: 'Joao',
        nota: 8
    },
    {
        nome: "Maria",
        nota: 5 
    },
    {
        nome: 'Lucas',
        nota: 9
    }
]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log('media:', media)