// Alternancia entre Tema Claro e Escuro
const botaoTema = document.getElementById('btn-tema');
const corpoPagina = document.body;

botaoTema.addEventListener('click', function () {
    corpoPagina.classList.toggle('tema-escuro');

    // Muda o texto do botao conforme o tema ativo
    if (corpoPagina.classList.contains('tema-escuro')) {
        botaoTema.textContent = 'Modo Claro';
    } else {
        botaoTema.textContent = 'Modo Escuro';
    }
});

// Menu Responsivo (Mobile) 
const btnMobile = document.getElementById('btn-mobile');
const navMenu = document.getElementById('nav-menu');
const linksMenu = document.querySelectorAll('.nav-link');

btnMobile.addEventListener('click', function () {
    navMenu.classList.toggle('ativo');
});

// Fecha o menu mobile automaticamente ao clicar em algum link
linksMenu.forEach(function (link) {
    link.addEventListener('click', function () {
        navMenu.classList.remove('ativo');
    });
});

// Validacao e Simulacao de Envio do Formulario 
const formulario = document.getElementById('form-contato');
const caixaAviso = document.getElementById('aviso-form');

formulario.addEventListener('submit', function (evento) {
    // Evita que a pagina recarregue ao enviar
    evento.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verifica se algum campo obrigatorio esta vazio
    if (nome === '' || email === '' || mensagem === '') {
        mostrarAviso('Por favor, preencha todos os campos obrigatórios antes de enviar.', 'erro');
        return;
    }

    // Expressao regular para validar formato de e-mail (ex: usuario@dominio.com)
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!padraoEmail.test(email)) {
        mostrarAviso('O e-mail informado não é válido. Verifique o formato (exemplo@dominio.com).', 'erro');
        return;
    }

    // Simulacao de envio concluido com sucesso
    mostrarAviso('Mensagem enviada com sucesso! Obrigado pelo contato, ' + nome + '.', 'sucesso');
    formulario.reset();
});

// Funcao auxiliar para exibir mensagens na tela
function mostrarAviso(texto, tipo) {
    caixaAviso.textContent = texto;
    
    if (tipo === 'erro') {
        caixaAviso.className = 'aviso-erro';
    } else {
        caixaAviso.className = 'aviso-sucesso';
    }

    // Esconde o aviso automaticamente apos 5 segundos
    setTimeout(function () {
        caixaAviso.className = 'aviso-escondido';
    }, 5000);
}
