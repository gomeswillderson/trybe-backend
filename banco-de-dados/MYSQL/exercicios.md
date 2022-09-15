Encontrando dados em um banco de dados
Exercicios feitos com base no banco Sakila

SELECT:
P: Escreva uma query que selecione todas as colunas da tabela city:
R: SELECT * FROM sakila.city;

P: Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer:
R: SELECT first_name, last_name FROM sakila.customer;

P: Escreva uma query que exiba todas as colunas da tabela rental:
R: SELECT * FROM sakila.rental;

P: Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film:
R: SELECT title, description, release_year FROM sakila.film;

CONCAT:
P: Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.
R: SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;

P: Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
R: SELECT CONCAT(title, ' ', rating) AS Classificação FROM sakila.film;

P: Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.
R: SELECT CONCAT(address, ' ', district) AS Endereço FROM sakila.address;