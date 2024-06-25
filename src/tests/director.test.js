const request = require('supertest')
const app = require('../app')


// ===== ===== Definition of the variables used in the tests ===== =====
const director = {
    firstName: 'Gillermo',
    lastName: 'Del Toro',
    nationality: 'Mexican',
    image: 'deltoro.png',
    birthday: '1898-05-23'
}

const directorUpdate = {
    firstName: 'Alejandro ',
    lastName: 'Iñárritu',
    image: 'iniarritu.jpg',
    birthday: '1878-01-24'
}

let directorId

const BASE_URL = '/api/v1/directors'


// ===== ===== Definition of the tests ===== =====
test('POST => "BASE_URL" should return status code 201 and res.body.firstName === director.firstName', async() => {

    const res = await request(app)
        .post(BASE_URL)
        .send(director)

    directorId = res.body.id

    expect(res.statusCode).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(director.firstName)
})


test('GET => "BASE_URL" should return status code 200 and res.body[0].firstName === director.firstName', async()=> {

    const res = await request(app)
        .get(BASE_URL)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body[0].firstName).toBe(director.firstName)
    expect(res.body).toHaveLength(1)
})

test('GET => "BASE_URL/:id" should return status code 200 and res.body.firstName === director.firstName', async() => {

    const res = await request(app)
        .get(`${ BASE_URL }/${ directorId }`)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(director.firstName)
})


test('PUT => "BASE_URL/:id" should return status code 200 and res.body.firstName === directorUpdate.firstName ', async() => {

    const res = await request(app)
    .put(`${ BASE_URL }/${ directorId }`)
    .send(directorUpdate)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(directorUpdate.firstName)
})


test('DELETE => "BASE_URL/:id" should return status code 204', async()=> {
    
    const res = await request(app)
        .delete(`${ BASE_URL }/${ directorId }`)
    
    expect(res.statusCode).toBe(204)
})
