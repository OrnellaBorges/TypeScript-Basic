
/*Vérification de type avec typeof :
Vous pouvez utiliser typeof pour étroitement typer une variable en fonction de son type réel. */



function traiterValeur(valeur: string | number) {
    if (typeof valeur === "string") {
        // Ici, "valeur" est de type "string"
        console.log(valeur.toUpperCase());
    } else {
        // Ici, "valeur" est de type "number"
        console.log(valeur.toFixed(2));
    }
}


/*Vérification de type avec instanceof :
L'opérateur instanceof permet de vérifier si un objet est une instance d'une classe. */

class Animal {
    manger() {
        console.log("Mange de la nourriture");
    }
}

class Chien extends Animal {
    aboyer() {
        console.log("Woof!");
    }
}

function manipulerAnimal(animal: Animal) {
    if (animal instanceof Chien) {
        // "animal" est de type "Chien" à l'intérieur de ce bloc
        animal.aboyer();
    } else {
        // "animal" est de type "Animal"
        animal.manger();
    }
}


/* 
Vérification de valeurs avec switch :
La déclaration switch peut également être utilisée pour étroitement typer une variable en fonction de ses valeurs. */

type Couleur = "Rouge" | "Vert" | "Bleu";

function traiterCouleur(couleur: Couleur) {
    switch (couleur) {
        case "Rouge":
            console.log("C'est rouge !");
            break;
        case "Vert":
            console.log("C'est vert !");
            break;
        case "Bleu":
            console.log("C'est bleu !");
            break;
        default:
            // TypeScript sait que "couleur" ne peut être que l'une des valeurs spécifiées
            const exhaustiveCheck: never = couleur;
            break;
    }
}
