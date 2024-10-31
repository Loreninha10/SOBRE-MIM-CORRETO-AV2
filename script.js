// Função simples para exibir uma mensagem ao clicar no botão de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('footer a');
    
    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir que o link execute sua função padrão
        alert('Obrigado por entrar em contato! Vamos retornar o mais breve possível.');
    });
});