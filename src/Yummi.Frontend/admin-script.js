document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('.order-button');

    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('prepare-order')) {
                // Preparando o pedido
                button.textContent = 'Finalizar Pedido';
                button.classList.remove('prepare-order');
                button.classList.add('finish-order');
            } else if (button.classList.contains('finish-order')) {
                // Pedido finalizado
                button.textContent = 'Pedido Finalizado';
                button.classList.remove('finish-order');
                button.classList.add('finished-order');
                button.disabled = true; // Desativa o botão após o pedido ser finalizado
            }
        });
    });
});