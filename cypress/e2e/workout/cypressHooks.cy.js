/// <reference types="cypress" />

describe('', function () {

    before(function () {
        console.log('This is from BEFORE block')
    })
    after(function () {
        console.log('This is from AFTER EACH block')
    })
    beforeEach(function () {
        console.log('This is from BEFORE EACH block')
    })
    afterEach(function () {
        console.log('This is from AFTER block')
    })

    it('First method', ()=>{
        console.log('This is from first block')
    })
    it('Second method', ()=>{
        console.log('This is from second block')
    })
    it('Third method', ()=>{
        console.log('This is from third block')
    })
})