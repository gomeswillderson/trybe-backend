-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.

SELECT 
    actor.actor_id,
    CONCAT(actor.first_name, ' ', actor.last_name) AS 'nome do ator',
    film.film_id
FROM
    sakila.actor AS actor
        INNER JOIN
    sakila.film_actor AS film ON actor.actor_id = film.actor_id;