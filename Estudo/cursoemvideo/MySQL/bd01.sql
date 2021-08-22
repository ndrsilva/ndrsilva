
DROP DATABASE cadastro; /*Deleta do db "cadastro"*/

CREATE DATABASE cadastro
DEFAULT CHARACTER SET utf8 /*Define os caracteres Brasileiros "para o uso de acesntos"*/
DEFAULT COLLATE utf8_general_ci; /*Define os caracteres Brasileiros "para o uso de acentos"*/

USE cadastro; /*Seleciona o db "cadastro"*/

CREATE TABLE pessoas (
	id 	INT NOT NULL auto_increment, /*auto_increment - O id será gerado automaticamente*/
	nome VARCHAR(30) NOT NULL, /*"NOT NULL", obriga o preenchimento desse campo*/
    nascimento DATE,
    sexo ENUM('M', 'F'), /*O campo só aceitará os valores pré-preenchido*/
    peso DECIMAL(5,2),/*Os valores definido, declara que o campo só aceitará trés casas antes da vírgula e dois depois dela*/
    altura DECIMAL(3,2),
    nascionalidade VARCHAR(20) DEFAULT 'Brasil',
    PRIMARY KEY (id) /*Declarando quem será a chave primaria da tabela "pessoas"*/
)DEFAULT CHARSET = utf8;

INSERT INTO pessoas
(id, nome, nascimento, sexo, peso, altura, nascionalidade)
VALUES
(DEFAULT, 'Pedro', '1993-01-02', 'F', '55.10', '1.51', 'Portugal'),
(DEFAULT, 'Andrré', '1993-03-23', 'M', '61.50', '1.72', DEFAULT),
(DEFAULT, 'Léo', '1998-02-17', 'M', '65.87', '1.73', DEFAULT),
(DEFAULT, 'Egu', '1997-01-28', 'M', '64.78', '1.72', DEFAULT);


DESC pessoas;
SELECT * FROM pessoas;

ALTER TABLE pessoas/*Add uma nova coluna, se não especificarmos a sua posição, ela irá para ultima posição*/ 
ADD COLUMN profissao VARCHAR(10); 

ALTER TABLE pessoas/*Altera o nome da tabela*/
RENAME TO gafanhotos;

ALTER TABLE pessoas/*A coluna será Add depois da coluna "nome", graças ao ""AFTER*/
ADD COLUMN profissao VARCHAR(10) AFTER nome;

ALTER TABLE pessoas/*A coluna irá para a primeira posição, apenas coloque o "FIRST"*/
ADD COLUMN codigo INT FIRST; 

ALTER TABLE gafanhotos/*MODIFY nos permite modificar a atribuição da coluna "profissao"*/
MODIFY COLUMN prof VARCHAR(25);


SELECT * FROM 	pessoas;

ALTER TABLE pessoas /*CHANGE, podemos modificar o nome da culuna*/
CHANGE COLUMN profissao prof VARCHAR(20);

ALTER TABLE pessoas
DROP column profissao; 

CREATE TABLE IF NOT EXISTS cursos(
nome VARCHAR(30) NOT NULL UNIQUE,
descricao TEXT,
carga INT UNSIGNED,
totaulas INT,
ano YEAR DEFAULT '2016'
) DEFAULT CHARSET = utf8;

DESC cursos;

ALTER TABLE cursos
ADD COLUMN idcurso INT FIRST;

ALTER TABLE cursos/*definindo a coluna "idcursos" como PRIMARY KEY*/
ADD PRIMARY KEY (idcurso);

INSERT INTO cursos VALUES
('1', 'HTML4', 'Curso de HTML5', '40', '37', '2104'),
('2', 'Algoritmos', 'Lógica de programação', '20', '15', '2014'),
('3', 'PhotoShop', 'Dicas de PhotoShop CC', '10', '8', '2014'),
('4', 'PGP', 'Curso de PHP para iniciantes', '40', '20', 2010),
('5', 'Jarva', 'Introdução à Linguagem Java', '10', '29', '2000'),
('6', 'MySQL', 'Bancos de Dados MySQL', '30', '15', '2016'),
('7', 'Word', 'Curso Completo de Word', '40', '30', '2016'),
('8', 'Sapateado', 'Danças Ríticas', '40', '30', '2018'),
('9', 'Cozinha Árabe', 'Gerar polêmica e ganhar inscritos', '5', '2', '2018');

UPDATE cursos
SET nome = 'HTML5'
WHERE idcurso = '1';

UPDATE cursos 
SET nome = 'PHP', 	ano = '2015'
WHERE idcurso = '4';

UPDATE cursos
SET nome = 'JAVA',	ano = '2015', carga = '40'
WHERE idcurso = '5'
limit 1;

UPDATE cursos 
SET ano = '2018', carga = '0'
WHERE ano = '2050'
LIMIT 1;

DELETE FROM cursos
WHERE idcurso = '8';

DELETE FROM cursos
WHERE ano = '2108';

SELECT * FROM cursos;

TRUNCATE TABLE cursos;

DROP TABLE  IF EXISTS pessoas ;/*Deleta a tabela e seus dados*/






