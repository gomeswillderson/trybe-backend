-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.

SELECT 
    CONCAT(s.first_name, ' ', s.last_name) AS funcionario,
    a.address AS endereco
FROM
    sakila.staff AS s
        INNER JOIN
    sakila.address AS a ON s.address_id = a.address_id