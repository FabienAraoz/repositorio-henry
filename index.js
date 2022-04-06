
var nombre;
var edad;
var valor;
var guapo;

class Persona{
     constructor(nombre,edad,valor,guapo){
         this.nombre = nombre; 
         this.edad = edad;
         this.valor = valor;
         this.guapo = guapo;
     }
     //mçetodos
     interpretar(){
        console.log(this.info());
     }
     info(){
         return ("Nombre=> "+this.nombre+", edad = "+this.edad+", valor = "+this.valor+", es guapo?: "+this.guapo+".");
     }
}

const Araoz = new Persona("Gonzalo", 18, true, true);
Araoz.interpretar();
//esperemos que esto funcione :)


 