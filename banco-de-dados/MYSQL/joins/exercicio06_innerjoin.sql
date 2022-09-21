-- Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um
-- número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).

USE Pixar;
SELECT 
    m.title AS 'Filme',
    (b.domestic_sales + b.international_sales) AS 'Vendas Totais'
FROM
    Movies AS m
        INNER JOIN
    BoxOffice AS b ON b.movie_id = m.id
WHERE
    international_sales > domestic_sales;