const nome = document.getElementById('nome')
const servico = document.getElementById('servico')
const semana = document.getElementById('semana')
const horario = document.getElementById('horario')
const formulario = document.getElementById('formulario')
const telefone = document.getElementById('telefone')
const comentario = document.getElementById('comentario')
const resposta = document.getElementById('resposta')

formulario.onsubmit = event => {
    event.preventDefault ()

    if (
        validarnome() &&
        validartelefone() &&
        validarsemana() &&
        validarhorario() &&
        validarservico() &&
        validarcomentario() 
        
    ) {
        alert("Agendamento feito com sucesso")
        resposta.textContent = ""
    }


      /*validação do nome */
 function validarnome(){

    nome.value = nome.value.trim()

        if (!nome.value)  {
            resposta.textContent = 'O campo Nome deve ser preenchido!'
            nome.focus()
            return false  
        }

        //const regex = /^([a-z]{2,}([\s-][a-z]{2,})+)$/gi

      /*  if (!regex.test(nome.value)){
            resposta.textContent = 'Formato de Nome invalido, digite novamente !'
            nome.focus()
            return false
        }
                return true */

                if (nome.value.length <= 2) {
                    resposta.textContent = 'Nome invalido, digite novamente !'
                    nome.focus()
                    return false
                }
                return true
 }


/* validação do servico  */

function validarservico(){

    if (!servico.value){
        resposta.textContent = 'Selecione o campo O que deseja fazer !'
        servico.focus()
        return false
    }

    return true
}

/* validar semana */
function validarsemana(){

    if (!semana.value){
        resposta.textContent = 'Selecione o dia da semana desejado!'
        semana.focus()
        return false
    }

    return true
}

/* validar horario */
function validarhorario(){

    if (!horario.value){
        resposta.textContent = 'Selecione o horario dejado!'
        horario.focus()
        return false
    }

    return true

}

    /* validar telefone */

    function validartelefone() {
        telefone.value = telefone.value.trim()

        if (!telefone.value) {
            resposta.textContent = 'Digite um numero de Celular !'
            telefone.focus()
            return false
        }
        return true
    }

    //    const regex = /^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$/

  /*  if (!telefone.value) {
        resposta.textContent = 'Formato de telefone inválido!'
        return false
    }
    return true
*/ 

/* validar mensagem */

function validarcomentario(){
    comentario.value = comentario.value.trim()

    if (!comentario.value){

        resposta.textContent = 'comentario obrigatorio!'
        comentario.focus()
        
    }

    if (comentario.value.length < 3){
        resposta.textContent = 'o campo deve ter no minino 3 caracteres!'
        comentario.focus
        return false
    }
    return true
}
}

