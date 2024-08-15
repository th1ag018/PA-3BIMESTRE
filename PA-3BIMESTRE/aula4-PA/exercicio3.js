//3- Criar um programa para autenticar a entrada de um usúario por meio de seu login e senha.
//O login correta será: "root" e a senha será "info@1234". Se os dados estiverem errados, deverá aparecer a mensagem: "Dados não conferem. Procure o Administrador".

const login = "root"
const senha = "info@1234"

if (login==="root" && senha==="info@1234") {
    console.log(`Usuário(a) Autenticado(a)`)
} else {
    console.log(`Dados não conferem. Procure o Administrador`)
}