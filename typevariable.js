let age  = 28;
let ageIsINTEGER = Number.isInteger(age);

let isJavascriptFun = true;

let user = {
    firstname : "jim";
    lastname :"halpert";
    worplace : "dunder street";
    hobbies : {
        main :"bascket ball";
        secondary : "computer games ";
    }
}
let price ;
console.log(price);

let base = '2 ';// js est un langage a typage dynamqiue , il modifie  le type de la 
//variable:on a casté la chaine de caratctere  vers la variable de nombre entier 

let exposant = 4;
let resultat  = Math.pow(base, exposant);
console.log( resultat);



let a = 3;
let b = '3';
console.log(a+b) // js a relaisé une concatenation et non une addition, il a colle 3 et 3 , 
// il  a casté lavaleur a pour devenir une chaine de caractere 
// il faut mettre parse int 
console.log ( a+parseInt(b,10));

//si on remplace addition par sousrtaction 
console.log(a - b)//js est acpable de faire la soustraction m^me s il y a une chaine de caractere 