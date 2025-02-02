/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/


//Fiquei com preguiça e coloquei apenas algumas cores aleatórias
enum corFavo {
  AZUL_MARINHO = "azul",
  VERMELHO = "vermelho",
  BRANCO = "branco"
}

export type carac = {
  nome: string,
  idade: number,
  corFavorita: corFavo
}

const pessoa1: carac = {
  nome: "Linn",
  idade: 19,
  corFavorita: corFavo.AZUL_MARINHO
}

const pessoa2: carac = {
  nome: "Isa",
  idade: 19,
  corFavorita: corFavo.BRANCO
}

const pessoa3: carac = {
  nome: "Igor",
  idade: 19,
  corFavorita: corFavo.VERMELHO
}

const Pessoas: carac[] = [
  pessoa1,
  pessoa2,
  pessoa3
]

console.log(Pessoas)