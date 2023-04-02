describe('Registro de usuario', ()=>{
    beforeEach( ()=> {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verificar mensagens de validação de login', ()=> {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verificar mensagens de validação Registro ', ()=> {
        cy.get('input[formcontrolname="userName"]').type('souqa');
        cy.contains('button', 'login').click();
    })

    it ('verificar mensagens de validação Registro', ()=> {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required').should('be.visible');
    })
    it('verificar validação email', ()=> {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required').should('be.visible');
        cy.get('input[formcontrolname="email"]').type('souqa');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })
        
})