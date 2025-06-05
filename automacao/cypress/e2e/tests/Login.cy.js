import MyAccountPage from "../pages/MyAccountPage";

describe('Funcionalidade Login do usuário', () =>{

    beforeEach(() =>{
          MyAccountPage.visit();
      });
  

    it('CT_LOG_001 - Validar login de usuário com sucesso (credenciais válidas).', () =>{
        const usuarioValido = 'teste.manual.01@mailinator.com';
        const senhaValida = 'SenhaSegura@123';

        MyAccountPage.login(usuarioValido,senhaValida);
        MyAccountPage.mensagemDeSucesso.should('be.visible')
        MyAccountPage.mensagemDeSucesso.should('contain', `Hello`);
        cy.url().should('include', '/my-account/');
        cy.contains('Dashboard').should('be.visible');
    });
    
    it('CT_LOG_002 - Validar mensagem de erro ao tentar fazer login com credenciais inválidas.', () =>{
        const usuarioInvalido = '1234@gmail.com';
        const senhaInvalida = "qualquercoisa";

        MyAccountPage.login(usuarioInvalido,senhaInvalida);
        MyAccountPage.mensagemDeErro.should('be.visible');
        MyAccountPage.mensagemDeErro.should('contain', 'The password you entered for the username')
        cy.url().should('include', '/my-account/');
        
    });
});
  

