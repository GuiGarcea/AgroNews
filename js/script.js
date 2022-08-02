function enviar(){
	var msgE = 'Favor preencher o campo';

	if(document.getElementById('nome').value == '' ){
		mostrarMensagemErro(msgE, 'nome');
		return;

	}

	if(document.getElementById('email').value == ''){
		mostrarMensagemErro(msgE, 'email');
		return;
	}

	if(document.getElementById('assunto').value == ''){
		mostrarMensagemErro(msgE, 'assunto');
		return;
	}

	if(document.getElementById('mensagem').value == ''){
		mostrarMensagemErro(msgE, 'mensagem');
		return;
	}

	document.form.action="resposta.html";
	document.form.submit();

}


function mostrarMensagemErro(msgE, nomeCampo){
	document.getElementById(nomeCampo).focus();
	var campoMSG = document.getElementById('mensagemErro');
	campoMSG.style.display ="block";
	campoMSG.innerHTML = msgE + ' ' + nomeCampo + '!';
	campoMSG.style.background='red';
	campoMSG.style.color='#ffffff';
}