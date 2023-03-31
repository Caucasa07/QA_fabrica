describe('Registro de usuario', ()=>{
    beforeEach( ()=> {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it ('verificar mensagens de validação', ()=> {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required').should('be.visible');
    })
    it('verificar vali email', ()=> {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required').should('be.visible');
        cy.get('input[formcontrolname="email"]').type('souqa');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it.only('verificar minimo de caracteres no nome do usuario', ()=>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('a');
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })
        
})