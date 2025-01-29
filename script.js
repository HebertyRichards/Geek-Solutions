//essa função booleana, ao clicar no botão a ´página fica no modo escuro e trocar o png sol para a lua. ao clicar novamente retorna ao padrão

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  const button = document.getElementById("darkModeButton");
  button.style.backgroundImage = isDarkMode ? "url('imagens/night.png')" : "url('imagens/sun.png')";
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// mesma coisa acima, mas na tela mobile
function toggleDarkMode2() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  const button = document.getElementById("darkModeButton");
  button.style.backgroundImage = isDarkMode ? "url('imagens/night.png')" : "url('imagens/sun.png')";
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

//essa função adeixa o modo escuro armazenado, caso mude de página no modo escuro ela estara salva e fica no modo escuro na outra página
function saveDark() {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
    const button = document.getElementById("darkModeButton");
    button.style.backgroundImage = "url('imagens/night.png')";
  }
}

saveDark();

//barra lateral para responsividade android
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
//esconde os elementos em html dentro de um array, ao clicar na imagem exibe o conteúdo em html
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
//função responsiva, caso a largura maior que 768 pixels deixa o conteudo visivel
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
//mesma coisa porem se for menor que 768 pixels
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
//função que fala a data atual do seu sistema operacional em tempo real
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
//carousel responsivo, determina o tempo que vai aparecer um ou se vai ser estático, quantos itens vai aparecer conforme for a responsividade
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
