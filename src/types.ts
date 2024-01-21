/* L
es Types  de base */

const mot: string = "hello";
const number: number = 3;
const bool: boolean = true;
const x: null = null;

// on peut déclarer un type pour des tableaux
const array: string[] = ["aze", "aze", "aze"];

// on peut mettre any si on a un peu de tout => pas conseillé
const randomArr: any[] = ["aze", "aze", 3];

// les type des objets
const userObj: { name: string; job: string } = { name: "John", job: "coder" };

// on peut mettre un ? devant un type pour signifier que c'est optionnel
const actor: { name: string; movieType?: string } = {
    name: "Rambo",
    movieType: "action",
};

/* Gros objet [key: string]: string 
pour indiquer que toutes les clés sont de type string */
const guestStar: { firstname: string; [key: string]: string } = {
    firstname: "Jacky",
    lastName: "Chan",
};

/*types spécifiques */

const date: Date = new Date();

/*types Fonctions */

const callBack: Function = (e: MouseEvent): void => {
    //ecrire la fonction dans la callback
};

/* :void permet de dire que la fonction ne doit rien retourner */

function printId(id: number): void {
    //ecrire l'algo à l'interieur
    console.log(id.toString());
}

/* Mot clé as est utilisé pour effectuer une conversion de type,
 souvent appelée "type assertion". 
Cela permet au développeur d'indiquer au compilateur TypeScript 
qu'il a une connaissance plus spécifique sur le type d'une expression
que ce que le compilateur peut déterminer automatiquement.  */
const counter = document.querySelector("#compteur") as HTMLButtonElement;


/* | = OU permet d'avoir deux options de typage*/

function maFunction(id: number | string): void {
    //ecrire l'algo à l'interieur
    console.log(id.toString());
}

