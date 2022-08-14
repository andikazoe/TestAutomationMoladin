import { expect } from "chai";

describe('Get API', () => {

    it('Get List Users', ()=> {
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users?page=2',
            headers : {

            }

        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    it('Get Single Users', ()=> {
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users/2'
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    it('Create Users', ()=> {
        cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/users',

            body: {
                "name": "andika",
                "job": "leader"
            }
        }).then((res) => {
            expect(res.status).to.eq(201)
        })
    })

    it('Edit Users', ()=> {
        cy.request({
            method : 'PUT',
            url : 'https://reqres.in/api/users/2',

            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    it('Delete Users', ()=> {
        cy.request({
            method : 'DELETE',
            url : 'https://reqres.in/api/users/2',

            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then((res) => {
            expect(res.status).to.eq(204)
        })
    })
})