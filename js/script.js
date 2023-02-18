window.onload = () => {
  loadGSAPAnimations();
  loadListenerSearchFieldElements();
  listBlocos();
};

const searchFieldElements = document.querySelectorAll(".search-field");
const inputsSearchFieldElements = document.querySelectorAll(
  ".search-field input"
);
const blocos = data;
const blocosWrapper = document.querySelector("#blocos-wrapper");

function loadListenerSearchFieldElements() {
  if (searchFieldElements.length === 0) {
    return;
  }

  searchFieldElements.forEach((searchField, index) => {
    searchField.addEventListener("click", () => {
      inputsSearchFieldElements[index].focus();
    });
  });
}

function createCardElement(card) {
  if (!card) {
    return;
  }

  const { imagePath, title, description, city } = card;
  const template = `
    <div class="bloco-card">
      <img class="bloco-card-image" src="${imagePath}" alt="imagem do bloco" />
      <div class="bloco-card-infos">
        <strong class="info-title"> ${title} </strong>
        <p class="info-description">${description}</p>
        <div class="infos-city">
          <i class="ph-map-pin-light"></i>
          <span>${city}</span>
        </div>
      </div>
    </div>
  `;

  return template;
}

function listBlocos() {
  blocos.forEach((bloco) => {
    blocosWrapper.insertAdjacentHTML("beforeend", createCardElement(bloco));
  });
}

function loadGSAPAnimations() {
  let tl = gsap.timeline();

  tl.from(".content-apresentation", {
    y: 100,
    duration: 2,
    opacity: 0,
    ease: "power3.out",
  });

  tl.to(".content-apresentation", {
    x: 0,
  });

  gsap.from(".content-search", {
    y: 200,
    duration: 1,
    ease: "power3.out",
    delay: 1,
    opacity: 0,
  });
  gsap.to(".content-search", { y: 0 });

  tl.from(".art-2", { x: 400 }, 1);
  tl.to(".art-2", { x: 0 });

  tl.from(".art-1", { x: -400 }, 1);
  tl.to(".art-1", { x: 0 });

  tl.from("#blocos", { x: 200, opacity: 0 }, 1.5);
  tl.to("#blocos", { x: 0 });
}
