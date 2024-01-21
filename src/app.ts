const compteur = document.querySelector("#compteur");
let count = 0;

const increment = (e: Event) => {
    e.preventDefault();
    count++;

    const span = compteur?.querySelector("span");

    if (span) {
        span.innerText = count.toString();
    }
};

compteur?.addEventListener("click", increment);
// ici  le ? permet de dire que tu fais le listener que si compteur existe

// le Narrowing permet a typescript de deviner le type de l'element

function printId(id: string | number) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    } else {
        console.log(id.toUpperCase());
    }
}
