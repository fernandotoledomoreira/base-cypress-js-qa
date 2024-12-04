import ApiUsuarios from '../client/crudApiUserClient';
import payload from '../mocks/postUserMock';
import Common from '../client/common';
import invalidPostApi from '../examples/invalidPostDataExemples';

let idUser
const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
};

describe('CRUD  API - Users', () => {
    it('POST User', () => {
        const url = "https://serverest.dev/usuarios"
        ApiUsuarios.requestApi('POST', url, headers, payload).then((response) => {
            ApiUsuarios.validadeStatusCode(response.status, 201);
            ApiUsuarios.validaMessage(response.body.message, "Cadastro realizado com sucesso");
            idUser = response.body._id
        });
        
    });

    it('GET User', () => {
        const url = `https://serverest.dev/usuarios?_id=${idUser}`
        ApiUsuarios.requestApi('GET', url, headers).then((response) => {
            ApiUsuarios.validadeStatusCode(response.status, 200);
            ApiUsuarios.validateResponseUser(response, payload, idUser);
        });
        
    });

    it('PUT User', () => {
        const url = `https://serverest.dev/usuarios/${idUser}`
        ApiUsuarios.requestApi('PUT', url, headers, payload).then((response) => {
            ApiUsuarios.validadeStatusCode(response.status, 200);
            ApiUsuarios.validaMessage(response.body.message, "Registro alterado com sucesso");
        });
        
    });

    it('DELETE User', () => {
        const url = `https://serverest.dev/usuarios/${idUser}`
        ApiUsuarios.requestApi('DELETE', url, headers).then((response) => {
            ApiUsuarios.validadeStatusCode(response.status, 200);
            ApiUsuarios.validaMessage(response.body.message, "Registro excluído com sucesso");
        });
        
    });
});

describe('POST Invalid Data', () => {
    invalidPostApi.forEach((testData) => {
        it(`POST User - field ${testData.field} with ${testData.value}`, () => {
            const url = "https://serverest.dev/usuarios"
            let updatedPayload = { ...payload };
            updatedPayload = Common.changeFieldsPayload(updatedPayload, testData.field, testData.value)
            ApiUsuarios.requestApi('POST', url, headers, updatedPayload).then((response) => {
                ApiUsuarios.validadeStatusCode(response.status, testData.code);
            });
            
        });
    });
});