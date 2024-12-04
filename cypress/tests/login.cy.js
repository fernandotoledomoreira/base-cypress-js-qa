import LoginPage from '../pages/loginPage';
import invalidLogins from '../examples/invalidLoginExamples';

describe('Login Tests', () => {
    it('Should login successfully', () => {
        cy.fixture('example').then((credentials) => {
            const {email, password} = credentials;

            cy.visit('/login'); 
            LoginPage.login(email, password);
            LoginPage.validateLogin();

        }); 
    });
});


describe('Login Invalid', () => {
    invalidLogins.forEach((testData) => {
        it(`Should show an error for ${testData.description}`, () => {
            cy.visit('/login'); 
            LoginPage.login(testData.email, testData.password);
            LoginPage.validateInvalidLogin(testData.message);

        });
    });
});

