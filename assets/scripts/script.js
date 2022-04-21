function clique() {
	alert('Clicou')
}

let nome = window.document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')

function enviar() {
	if (nome.value == '' || email.value == '' || assunto.value == '') {
		alert('Todos os campos devem ser preenchidos!')
		return false
	} else {
		alert('Olá ' + nome.value + '! Seu feedback foi enviado com sucesso!')
		return true
	}
}
