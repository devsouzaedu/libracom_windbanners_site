document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('video-bg');
    var fallback = document.getElementById('video-fallback');
  
    video.addEventListener('canplay', function () {
      video.classList.add('loaded');
      fallback.style.display = 'none';
    });
  
    video.play().then(function () {
      // Vídeo reproduzido com sucesso
    }).catch(function (error) {
      // Tratamento de erro ao reproduzir o vídeo
      console.log('Erro ao reproduzir o vídeo:', error);
    });
  
    // Iniciar carrossel da galeria
    $('.gallery').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 2,
      slidesToScroll: 2,
      centerMode: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          }
        }
      ]
    });
  
    // Iniciar carrossel de feedback
    $('#feedback-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    });
  
    // Animação suave ao clicar nos links do menu
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    // Alternar FAQ
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const answer = button.parentElement.nextElementSibling;
        if (answer) {
          answer.classList.toggle('faq-answer-visible');
        }
      });
    });
  
    // Mostrar/esconder botão flutuante ao rolar a página
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.floating-button').fadeIn();
      } else {
        $('.floating-button').fadeOut();
      }
    });
  
    // Animação suave ao clicar no botão flutuante
    $('.scroll-to-top').click(function() {
      $('html, body').animate({scrollTop : 0}, 800);
      return false;
    });
  });
  
  $(document).ready(function(){
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1200,
      dots: false,
    });
  });
  




// Função para gerar a prévia do post
function gerarPrevia(idDoPost, tamanhoPrevia) {
  // Pegue o conteúdo do post
  const postContent = document.querySelector(`#${idDoPost}`).innerText;
  
  // Divida o conteúdo em palavras
  const palavras = postContent.split(' ');

  // Limite o número de palavras (tamanhoPrevia)
  const previewWords = palavras.slice(0, tamanhoPrevia).join(' ');

  // Exiba a prévia em um elemento da homepage
  const previewElement = document.querySelector(`#preview-${idDoPost}`);
  previewElement.innerText = previewWords + '...';
}

// Chame a função na página inicial
document.addEventListener('DOMContentLoaded', () => {
  // Adapte o ID do post e o tamanho da prévia que você deseja (ex: 30 palavras)
  gerarPrevia('preview-post-content', 1000);
});








