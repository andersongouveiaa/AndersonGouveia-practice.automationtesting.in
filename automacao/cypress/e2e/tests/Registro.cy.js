import MyAccountPage from "../pages/MyAccountPage";

describe('Funcionalidade Registro de usuário', () =>{
    
    beforeEach(() =>{
        MyAccountPage.visit();
    });

    it('CT_REG_001 - Validar registro de usuário com sucesso (dados válidos)', () =>{
        const emailUnico = `teste_registro_${Date.now()}@test.com`;
        const senha = 'SenhaSegura@123';

        MyAccountPage.registro(emailUnico,senha);
        MyAccountPage.mensagemDeSucesso.should('be.visible')
        MyAccountPage.mensagemDeSucesso.should('contain', `Hello`);
        cy.url().should('include', '/my-account/');
        cy.contains('Dashboard').should('be.visible');
    })

    it('CT_REG_002 - Não deve registrar um usuário com email já existente.', () =>{
        const emailExistente = 'teste.manual.01@mailinator.com';
        const senhaInvalida ='Qualquercoisa';

        MyAccountPage.registro(emailExistente,senhaInvalida);
        MyAccountPage.mensagemDeErro.should('be.visible')
        MyAccountPage.mensagemDeErro.should('contain' , "An account is already registered with your email address. Please login.")
        cy.url().should('include','/my-account/');
    } )

    it('CT_REG_003 - Não deve registrar um usuário com campos vazios.', () =>{
        MyAccountPage.registrarCampoEmail.clear();
        MyAccountPage.registrarCampoSenha.clear();
        MyAccountPage.botaoRegistrar.should('be.disabled');
        MyAccountPage.mensagemDeErro.should('not.exist');
        
        cy.get('.woocommerce-MyAccount-content').should('not.exist');

        cy.url().should('include','/my-account/');


    })
})
