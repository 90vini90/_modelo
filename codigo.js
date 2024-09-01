function carregar() {
    // Captura a hora digitada pelo usuário
    const horaInput = document.getElementById('hora').value;
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    
    // Verifica se o usuário digitou uma hora válida
    if (horaInput === "" || horaInput < 0 || horaInput > 23) {
        alert("Por favor, digite uma hora válida entre 0 e 23.");
        return;
    }

    // Converte a hora para um número inteiro
    const hora = parseInt(horaInput);

    // Lógica para definir a mensagem e a imagem de acordo com a hora
    if (hora >= 0 && hora < 12) {
        // Bom dia
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`;
        body.style.background = '#d7a81f'
        img.src = "imagens/dia.png"; // Imagem de manhã
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`;
        img.src = "imagens/tarde.png"; // Imagem de tarde
        body.style.background = '#312e29'
    } else {
        // Boa noite
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`;
        img.src = "imagens/noite.png"; // Imagem de noite
        body.style.background = '#563b57'
    }
}
