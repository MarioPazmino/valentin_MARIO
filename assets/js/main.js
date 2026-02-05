$(document).ready(function () {
    // Al cargar la página, ocultamos las cortinas
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    // Función para crear corazones en el fondo
    function createHearts() {
        const heartsContainer = $('#heartsBackground');
        const numHearts = 30; // Número de corazones

        for (let i = 0; i < numHearts; i++) {
            const heart = $('<div class="heart-bg"></div>');
            const scale = Math.random() * 0.8 + 0.4; // Escala aleatoria entre 0.4 y 1.2
            const left = Math.random() * 100; // Posición horizontal aleatoria
            const top = Math.random() * 100; // Posición vertical aleatoria
            const delay = Math.random() * 5; // Retraso de animación aleatorio
            const duration = Math.random() * 3 + 4; // Duración entre 4 y 7 segundos

            heart.css({
                'left': left + '%',
                'top': top + '%',
                'transform': 'rotate(-45deg) scale(' + scale + ')',
                'animation-delay': delay + 's',
                'animation-duration': duration + 's'
            });

            heartsContainer.append(heart);
        }
    }

    $('.valentines-day').click(function () {
        // Animación de desvanecimiento de los elementos del sobre
        $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            // Ocultar elementos dentro de .valentines-day
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Mostrar el fondo de corazones
            createHearts();
            setTimeout(function() {
                $('#heartsBackground').addClass('show');
            }, 100);

            // Hacer visible la carta con una animación ondulante
            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000, step: function (now, fx) {
                    var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            }); // Animación de ondulación
        });
    });
}); 
