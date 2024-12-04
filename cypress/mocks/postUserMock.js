const { faker } = require('@faker-js/faker');
const fakeEmail = faker.internet.email();

let payload = {
    "nome": "Fulano da Silva",
    "email": fakeEmail,
    "password": "teste",
    "administrador": "true"
  }

export default payload;