CREATE DATABASE cadastro02;

USE cadastro02;

SHOW DATABASES;/*Mostra todos os bancos de dados existente no sistema*/

DESCRIBE pessoas;/*Mostra a descrição da tabela "pessoas"*/

DROP DATABASE cadastro02;/*Exclui o banco de dados específicado*/

CREATE DATABASE cadastro02
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

CREATE TABLE pessoas(
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(30),
    nascimento DATE,
    sexo ENUM('M', 'F'),
    peso DECIMAL(5,2),
    altura DECIMAL(3,2),
    nacionalidade VARCHAR(20) DEFAULT 'Brasil'    ,
    PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;

DROP TABLE pessoas;

DESC pessoas;/*DESC ou DESCRIBE / Descrição  */

/*/////////////////////////////////////////////////////////////////////////////////////*/
INSERT INTO pessoas
(id, nome, nascimento, sexo, peso, altura, nacionalidade)
VALUES
('1', 'ndrsilva', '1993-03-23', 'M', 61.2, '1.72', 'Brasil');
/*ou*/
INSERT INTO pessoas
(id, nome, nascimento, sexo, peso, altura, nacionalidade)
VALUES
(DEFAULT, 'soélia', '1973-02-17', 'F', 75.2, '1.61', DEFAULT);
/*ou*/
INSERT INTO pessoas VALUES
(DEFAULT, 'léo', '1998-02-17', 'M', 70.2, '1.72', DEFAULT);
/*ou*/
INSERT INTO pessoas VALUES
(DEFAULT, 'elenildo', '1997-01-28', 'M', '71.2', '1.72' , DEFAULT),
(DEFAULT, 'vivaldo', '1949-07-10', 'M', '58.3', '1.62' , DEFAULT),
(DEFAULT, 'lemos', '1991-08-04', 'F', '63.2', '1.71', 'Portugal');
/*/////////////////////////////////////////////////////////////////////////////////////*/

SELECT * FROM pessoas;