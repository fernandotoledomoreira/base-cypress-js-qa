const invalidLogins = [
    { email: 'testeinvalid@gmail.com', password: '1234', message: "Email e/ou senha inválidos", description: 'Invalid email format' },
    { email: 'fernandotoledomoreira@gmail.com', password: ' ', message: "Email e/ou senha inválidos", description: 'Empty password' },
    { email: ' ', password: '1234', message: "Email é obrigatório", description: 'Empty email' },
    { email: 'fernandotoledomoreira@gmail.com', password: '98765', message: "Email e/ou senha inválidos", description: 'Invalid password' }
];

export default invalidLogins;