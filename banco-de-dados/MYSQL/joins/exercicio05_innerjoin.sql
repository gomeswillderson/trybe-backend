-- Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.

use Pixar;
SELECT 
    m.title AS 'Filme',
    b.domestic_sales AS 'Vendas Nacionais',
    b.international_sales AS 'Vendas Internacionais'
FROM
    Movies AS m
        INNER JOIN
    BoxOffice AS b ON b.movie_id = m.id
ORDER BY domestic_sales DESC;