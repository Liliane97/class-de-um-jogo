class Heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome,
            this.idade = idade,
            this.tipo = tipo
    }

    atacar() {

        const ataques = { mago: "magia", guerreiro: "espada", monge: "arte marciais", ninja: "shuriken" }

        if (!ataques[this.tipo]) {
            console.log(`Ops o herói ${this.tipo} atacou usando um ataque desconhecido!!!`);
        } else {
            console.log(`O ${this.tipo} atacou usando ${ataques[this.tipo]}.`)
        }
    }
}

const heroi = new Heroi("Ana", 18, "ninja")
heroi.atacar()