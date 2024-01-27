/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
*/
type TPerson = {
    id: string | number,
    name: string,
    email: string,
    password: string | number,
}

// 1.2 Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;

enum USER_ROLES {
    ADMIN = "admin",
    NORMAL = "normal"
}

// 2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;

type AdminAccount = {
    account: string,
    permission: USER_ROLES
}

type NormalAccount = {
    account: string,
    permission: USER_ROLES
}


// 3. Crie exemplos de usuários Admin e Normal;


type AdminUser = TPerson & AdminAccount
type NormalUser = TPerson & NormalAccount


//Precisamos acessar o valor da permissão, então atráves do ENUM chamamos ele em determinados casos:

const user1: AdminUser = {
    id: "01",
    name: "Giovanni",
    email: "g@gmail.com",
    password: "12345678",
    account: "admin",
    permission: USER_ROLES.ADMIN
}

const user2: NormalUser = {
    id: "02",
    name: "Ana",
    email: "a@gmail.com",
    password: "12345678",
    account: "normal",
    permission: USER_ROLES.NORMAL
}


/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

2 Tipo Intersection unindo: pessoa(Person) + permissão (Role);

3. Um array de usuários que permite guardar apenas usuários do tipo Person;
*/ 

const users: AdminUser[] | NormalUser[] = [
    user1,
    user2
]
