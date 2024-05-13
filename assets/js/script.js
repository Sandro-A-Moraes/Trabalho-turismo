// ANIMAÇÕES DO MENU (NÃO MEXER)

document.querySelector(".menu-hamburguer").addEventListener("click", () => document.querySelector(".container").classList.toggle("show-menu"));
document.querySelector(".menu-hamburguer").addEventListener("click", () => document.querySelector(".fundo-vidro").classList.toggle("efeito-vidro"));

// Animações dos itens de menu (tentei uma classe única, mas funcionava apenas para o primeiro item)

document.querySelector("#menu-link-1").addEventListener("click", () => document.querySelector(".container").classList.toggle("show-menu"));
document.querySelector("#menu-link-1").addEventListener("click", () => document.querySelector(".fundo-vidro").classList.toggle("efeito-vidro"));

document.querySelector("#menu-link-2").addEventListener("click", () => document.querySelector(".container").classList.toggle("show-menu"));
document.querySelector("#menu-link-2").addEventListener("click", () => document.querySelector(".fundo-vidro").classList.toggle("efeito-vidro"));

document.querySelector("#menu-link-3").addEventListener("click", () => document.querySelector(".container").classList.toggle("show-menu"));
document.querySelector("#menu-link-3").addEventListener("click", () => document.querySelector(".fundo-vidro").classList.toggle("efeito-vidro"));


// Animação dos Mais visitados
let sectionTeste = document.querySelector("section.mais__visitados");
        sectionTeste.querySelectorAll(".container .item").forEach(item => {
            let label = item.querySelector("label");
            let input = item.querySelector("input");

            label.addEventListener("mouseover", () => {
                input.checked = true;
            })
        })
