// ALIAS de type = raccourcis de type reutilisables facilemt .
// evite de se répeter 

/* Création et déclaration des types */
type User = { firstname: string; lastname: string };
type DateString = string
type Id = string | number // peut etre pour les types d'union


/* Utilisation des types */
// utiliser le type crée au dessus après la variable
const user: User = { firstname: "Jane", lastname: "Doe" };
const date: DateString = 'string'; 



/* GENERIC */

// pour eviter que la function renvoie any on met après le nom de la fonction <NomTypeInvente>
function identity <ArgType>(arg:ArgType) : ArgType{
    return arg;
}


// on perd le type qui à été passé en paramètre dans la function identity
// Nous on veut que la fonction prenne un argument de n'importe quel type 
//et qu'elle retourne le meme type qu'elle à reçu en paramettre de la function 
const aa = identity<number>(3) 

// en ecrivant <number> devant l'appel de la function celle-ci permet a ts de comprendre que la fonction devra retourner le type voulut en sortie
// le type <number> sera associé à <ArgType> dans ma fonction
// mais TS est capable deviner automatiquement le type de l'argument qu'on passe en parramettre de la fonction


function first<Type>( arg : Type[]) : Type{
 return  arg[0] // retournera le type string
}

const array = first(["aze", "cer", "hus"])