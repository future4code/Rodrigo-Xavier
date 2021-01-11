### Exercício 1
a) Varchar - strings de no máximo n caracteres;
 Primary key- chave de identificador único (geralmente o ID);
Not null- o campo não poderá ficar em branco
Float- números não inteiros
Date- representa uma data (YYYY-MM-DD)

b) SHOW DATABASES - Lista os banco de dados
SHOW TABLES - Lista as tabelas criadas no banco de dados

c) DESCRIBE Actor- Lista as linhas e colunas da tabela Actor

```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

SHOW DATABASES
SHOW TABLES
DESCRIBE Actor
```

### Exercício 2
a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
```

b) Apresentou o erro por entrada da chave primária (id) duplicada,

c) A contagem de colunas não corresponde a contagem de linhas, faltou adicionar alguns parâmetros da tabela.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) O campo nome não tem um valor.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "João Xavier",
  400000,
  "1949-04-18",
  "male"
);
```
e) O campo data está sem as aspas, gerando um erro.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

### Exercício 3
a) SELECT * from Actor WHERE gender = "female"

b) SELECT name, salary from Actor WHERE name = "Tony Ramos"

c) Não retorna nenhum valor, pois os campos estão preenchidos.

d) SELECT id, name, salary from Actor WHERE salary <= 500000

e) Está escrito nome, deve ser name
```
SELECT id, nome from Actor WHERE id = "002"
```

### Exercício 4
a) Na lista de atores, somente irá apresentar os nomes começando pela letra A ou a letra J com salário acima de 300000

b) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000

c) SELECT * FROM Actor WHERE name LIKE "G%" OR name LIKE "%g%"

d) SELECT * FROM Actor 
WHERE (name LIKE "A%" OR name LIKE "%a%" OR name LIKE "G%" OR name LIKE "%g%") AND (salary BETWEEN 350000 AND 900000)

### Exercício 5
a) 
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT (255) NOT NULL,
    release_date DATE NOT NULL,
    evaluation INT NOT NULL
);

b) 
INSERT INTO Movie (id, name, synopsis, release_date, evaluation)
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

c) 
INSERT INTO Movie (id, name, synopsis, release_date, evaluation)
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

d) 
INSERT INTO Movie (id, name, synopsis, release_date, evaluation)
VALUES (
"003”,
“Dona “Flor e Seus Dois Maridos,
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02”,
8
);

e)
INSERT INTO Movie (id, name, synopsis, release_date, evaluation)
VALUES (
"004",
"O Auto da Compadecida",
"O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
"2000-09-10",
10
);

### Exercício 6
a) SELECT id, name, evaluation from Movie WHERE id = "001"

b) SELECT * fROM Movie WHERE name = "Deus é Brasileiro"

c) SELECT id, name, synopsis FROM Movie WHERE evaluation >=7

### Exercício 7
a) SELECT * FROM Movie WHERE name LIkE %vida%

b) SELECT * FROM Movie WHERE name LIKE %a% OR synopsis LIKE %a%

c) SELECT * FROM Movie WHERE release_date < 2021/01/10

d) SELECT * FORM Movide WHERE release_date < CURDATE AND (name LIKE %termo-de-busca% OR synopsis LIKE %termo-de-buca%) AND evaluation > 7