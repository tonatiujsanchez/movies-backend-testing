const request = require('supertest')
const app = require('../app')


// ===== ===== Definition of the variables used in the tests ===== =====
const genre = {
    name: 'Action',
}

const genreUpdate = {
    name: 'Comedy',
}

let genreId

const BASE_URL = '/api/v1/genres'


// ===== ===== Definition of the tests ===== =====
test('POST => "BASE_URL" should return status code 201 and res.body.name === genre.name', async() => {

    const res = await request(app)
        .post(BASE_URL)
        .send(genre)

    genreId = res.body.id

    expect(res.statusCode).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(genre.name)
})


test('GET => "BASE_URL" should return status code 200 and res.body[0].name === genre.name', async()=> {

    const res = await request(app)
        .get(BASE_URL)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body[0].name).toBe(genre.name)
    expect(res.body).toHaveLength(1)
})

test('should return status code 200 and res.body.name === genre.name', async() => {
    
    const res = await request(app)
        .get(`${ BASE_URL }/${ genreId }`)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(genre.name)
})


test('PUT => "BASE_URL/:id" should return status code 200 and res.body.name === genreUpdate.name ', async() => {

    const res = await request(app)
    .put(`${ BASE_URL }/${ genreId }`)
    .send(genreUpdate)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(genreUpdate.name)
})


test('DELETE => "BASE_URL/:id" should return status code 204', async()=> {

    const res = await request(app)
        .delete(`${ BASE_URL }/${ genreId }`)
    
    expect(res.statusCode).toBe(204)
})
