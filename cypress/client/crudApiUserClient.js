class ApiUsuarios {

    requestApi(method, url, headers = {}, payload = null) {
        const options = {
            method: method,
            url: url,
            headers: headers,
            failOnStatusCode: false,
        };
    
        if (payload) {
            options.body = payload;
        }
        return cy.request(options);
    }
    

    validadeStatusCode(response, expectCode) {
        expect(response).to.eq(expectCode);
    }

    validaMessage(response, message) {
        expect(response).to.eq(message);
    }

    validateResponseUser(response, payload, idUser) {
        expect(response.body.quantidade).to.eq(1);
        expect(response.body.usuarios[0].nome).to.eq(payload.nome);
        expect(response.body.usuarios[0].email).to.eq(payload.email);
        expect(response.body.usuarios[0].password).to.eq(payload.password);
        expect(response.body.usuarios[0].administrador).to.eq(payload.administrador);
        expect(response.body.usuarios[0]._id).to.eq(idUser);
    }

}

export default new ApiUsuarios();