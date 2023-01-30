const curiosidades = [
    {
      id: 1,
      img:
        "img/curi1.jpg",
      text:
        "A Nova Zelândia tem menos de 5 milhões de habitantes, sendo que há mais ovelhas que pessoas vivendo lá.",
    },
    {
      id: 2,
      img:
        "img/curi2.jpg",
      text:
        "Uma em cada 3 famílias de Auckland tem um barco próprio, não é a toa que a cidade é conhecida como “City of Sails”.",
    },
    {
      id: 3,
      img:
        "img/curi3.jpg",
      text:
        "A Nova Zelândia é o países com os menores índices de corrupção do mundo e com a melhor estrutura para turismo.",
    },
    {
      id: 4,
      img:
        "img/curi4.jpg",
      text:
        "Poluição é praticamente inexistente no país (os kiwis agradecem).",
    },
    {
        id: 5,
        img:
          "img/curi5.jpg",
        text:
          "Cerca de 30% da Nova Zelândia é coberta por florestas naturais. ",
      },
  ];
  // SELECIONAR AS CURI
  const img = document.getElementById("curi-img");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  let currentItem = 0;
  
  // DAR LOAD NOS ITENS(CURI)
  window.addEventListener("DOMContentLoaded", function () {
    const item = curiosidades[currentItem];
    img.src = item.img;
    info.textContent = item.text;
  });
  
  // MOSTRAR AS CURI 
  function mostrarCuri(curi) {
    const item = curiosidades[curi];
    img.src = item.img;
    info.textContent = item.text;
  }
  // MOSTRAR A PROXIMA CURI
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > curiosidades.length - 1) {
      currentItem = 0;
    }
    mostrarCuri(currentItem);
  });
  // MOSTRAR A CURI ANTERIOR
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = curiosidades.length - 1;
    }
    mostrarCuri(currentItem);
  });
  // MOSTRAR CURI RANDOM
  randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * curiosidades.length);
    mostrarCuri(currentItem);
  });