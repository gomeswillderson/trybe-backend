-- Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

USE Pixar;
SELECT 
    t1.title, t2.rating
FROM
    Movies AS t1
        INNER JOIN
    BoxOffice AS t2 ON t1.id = t2.movie_id
ORDER BY rating DESC;