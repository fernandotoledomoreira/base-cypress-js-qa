class LoginPage {
    getUsernameInput() {
        return cy.get('[data-testid="email"]');
    }

    getPasswordInput() {
        return cy.get('[data-testid="senha"]');
    }

    getLoginButton() {
        return cy.get('[data-testid="entrar"]');
    }

    login(username, password) {
        this.getUsernameInput().type(username);
        this.getPasswordInput().type(password);
        this.getLoginButton().click();
    }

    validateLogin() {
        cy.contains('Home').should('be.visible');
    }

    validateInvalidLogin(message) {
        cy.contains(message).should('be.visible');
    }
}

export default new LoginPage();
