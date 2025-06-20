// Definindo a classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase(); // garantir minúsculas para comparação
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "atacou de forma misteriosa";
        break;
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso:
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 120, "mago");
const heroi3 = new Heroi("Lee", 40, "monge");
const heroi4 = new Heroi("Hanzo", 25, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();