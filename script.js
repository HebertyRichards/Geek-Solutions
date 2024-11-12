function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const button = document.getElementById("darkModeButton");
  const isDarkMode = body.classList.contains("dark-mode");
  button.style.backgroundImage = isDarkMode ? "url('imagens/night.png')" : "url('imagens/sun.png')";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function verificarLargura() {
  const section = document.getElementById('mySection');

  if (window.innerWidth > 768) {
    section.style.display = 'none';
  } else {
    section.style.display = 'block';
  }
}

verificarLargura();

window.addEventListener('resize', verificarLargura);

function verificarLargura2() {
  const section2 = document.getElementById('mySection2');
  if (window.innerWidth < 768) {
    section2.style.display = 'none';
  } else {
    section2.style.display = 'block';
  }
}

verificarLargura2();

window.addEventListener('resize', verificarLargura2);

function atualizarRelogio() {
  let dia = new Date().getDay();
  let saida = document.getElementById('saida');

  let dataAtual = new Date();
  let diah = dataAtual.getDate();
  let mes = dataAtual.getMonth() + 1;
  let ano = dataAtual.getFullYear();
  let hoje = " Dia " + diah + "/" + mes + "/" + ano + " - ";
  switch (dia) {
    case 0:
      saida.innerHTML = 'Hoje é Domingo!';
      break;
    case 1:
      saida.innerHTML = 'Hoje é Segunda-feira!';
      break;
    case 2:
      saida.innerHTML = 'Hoje é Terça-feira!';
      break;
    case 3:
      saida.innerHTML = 'Hoje é Quarta-feira!';
      break;
    case 4:
      saida.innerHTML = 'Hoje é Quinta-feira!';
      break;
    case 5:
      saida.innerHTML = 'Hoje é Sexta-feira!';
      break;
    case 6:
      saida.innerHTML = 'Hoje é Sábado!';
      break;
    default:
      saida.innerHTML = 'Erro no cálculo do dia!';
  }
  saida.innerHTML += hoje + " " + dataAtual.toLocaleTimeString();
}
setInterval(atualizarRelogio, 995);

$(document).ready(function () {
  $('#carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('#coments').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true
        }
      }
    ]
  });
});