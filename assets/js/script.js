// Animação menu
document.querySelector(".hamburguer").addEventListener("click", () => document.querySelector(".container").classList.toggle("show-menu"));



let sectionTeste = document.querySelector("section.mais__visitados");
        sectionTeste.querySelectorAll(".container .item").forEach(item => {
            let label = item.querySelector("label");
            let input = item.querySelector("input");

            label.addEventListener("mouseover", () => {
                input.checked = true;
            })
        })
