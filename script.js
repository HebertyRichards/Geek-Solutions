function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  const button = document.getElementById("darkModeButton");
  button.style.backgroundImage = isDarkMode ? "url('imagens/night.png')" : "url('imagens/sun.png')";
}

function toggleDarkMode2() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  const button = document.getElementById("darkModeButton");
  button.style.backgroundImage = isDarkMode ? "url('imagens/night.png')" : "url('imagens/sun.png')";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

function expansed(id) {
  const ids = ['master', 'master1', 'master2', 'master3', 'master4'];
  ids.forEach(elId => {
    const element = document.getElementById(elId);
    if (element) {
      element.style.display = 'none';
    }
  });

  const selectedElement = document.getElementById(id);
  if (selectedElement) {
    selectedElement.style.display = 'flex';
  }
}

function unexpansed() {
  const ids = ['master', 'master1', 'master2', 'master3', 'master4'];
  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none';
    }
  });
}

function hideContent(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'none';
  }
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

$(document).ready(function () {
  $('#imagens').slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('#s1').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false
  });
});
