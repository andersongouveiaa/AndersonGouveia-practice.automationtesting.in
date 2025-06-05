class MyAccountPage {
    
    visit(){
        cy.visit('/my-account/');
    }
//gets para registros de contas

    get registrarCampoEmail(){
        return cy.get('#reg_email');
    }

    get registrarCampoSenha(){
        return cy.get('#reg_password');
    }

    get botaoRegistrar(){
        return cy.get("input[name='register']");
    }
//ação de registrar
    registro(email,senha){
        this.registrarCampoEmail.type(email);
        this.registrarCampoSenha.type(senha);
        this.botaoRegistrar.click();
    }
 //gets para login
 
    get loginCampoUsuario(){
        return cy.get('#username');
    }

    get loginCampoSenha(){
        return cy.get('#password');
    }

    get botaoLogin(){
       return cy.get("input[name='login']");
    }

//ação de login
    login(usuario,senha){
        this.loginCampoUsuario.type(usuario);
        this.loginCampoSenha.type(senha);
        this.botaoLogin.click();

    }    

    get mensagemDeSucesso(){
        return cy.get('.woocommerce-MyAccount-content').contains('p', 'Hello');
    }

    get mensagemDeErro(){
        return cy.get('.woocommerce-error');
    }

}

export default new MyAccountPage();
