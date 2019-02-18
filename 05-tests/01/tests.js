const assert = require('assert');
const {obterPessoas} =require ('./service')

describe('Star Wars Tests', function () {
    it('Should look for r2d2 with the correct format', async () => {
        const expected = [{
            nome: 'R2-D2',
            peso: '96'
        }]
        const nomeBase = `r2-d2`
        const result = await obterPessoas(nomeBase)
        assert.deepEqual(result,expected)
    })
})