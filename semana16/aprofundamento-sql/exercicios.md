### Exercício 01
a) Deletar a coluna salary
b) Altera o nome da coluna de gender para sex e uma string de 6 caracteres
c) altera a coluna gender para receber uma string de 6 caracteres
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 02
a) 
UPDATE Actor
SET NAME = "Moacyr Franco",
birth_date = "1935-12-01"
WHERE id = "003";

b)
UPDATE Actor
SET NAME = "JULIANA PÃES"
WHERE id = "005";

UPDATE Actor
SET NAME = "Juliana Paes"
WHERE id = "005";

c)
UPDATE Actor
SET name = “Mariana Ximenes”,
salary = 500000,
birth_date= “1981-04-26",
gender= “female”
WHERE id = “005";

d) Não apresenta erro, porém nada é alterado.
UPDATE Actor
SET NAME = "Juliana Paes"
WHERE id = "011";

### Exercício 03
a)
DELETE FROM Actor WHERE id = "004";
b)
DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000;

### Exercício 04
a)
SELECT MAX(salary) FROM Actor;
b)
SELECT MIN(salary) FROM Actor
WHERE gender = "female";
c)
SELECT COUNT(*) FROM Actor
WHERE gender= "female";
d)
SELECT SUM(salary) FROM Actor;

### Exercício 05
a) Faz a contagem dos caracateres de forma individual do banco, nesse caso dos generos (male e female)
b)
SELECT id, name FROM Actor
ORDER BY name DESC;
c)
SELECT * FROM Actor
ORDER BY salary;
d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### Exercício 06
a)
ALTER TABLE Movie ADD playing_limit_date DATE;
b)
ALTER TABLE Movie CHANGE rating rating FLOAT;
UPDATE Movie SET rating = 8.5 WHERE id= "003";
c)
UPDATE Movie SET playing_limit_date = "2021-01-25" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2020-01-01" WHERE id = "002";
d) Como o id não existe mais, nada é feito, porém não apresenta erro.
DELETE FROM Movie WHERE id= "004";
UPDATE Movie SET synopsis = "teste teste teste" WHERE id = "004";

### Exercício 07
a)
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
b)
SELECT AVG(rating) FROM Movie;
c)
SELECT COUNT(*) FROM Movie;
d)
SELECT COUNT(*) FROM Movie WHERE release_date > CURRENT_DATE();
e)
SELECT MAX(rating) FROM Movie;
f)
SELECT MIN(rating) FROM Movie;

### Exercício 08
a)
SELECT * FROM Movie
ORDER BY name ASC;
b)
SELECT * FROM Movie
ORDER BY name DESC
LIMIT 5;
c)
SELECT * FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
d)
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;