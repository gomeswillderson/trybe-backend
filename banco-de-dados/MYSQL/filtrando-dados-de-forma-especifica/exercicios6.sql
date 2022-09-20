USE PecasFornecedores;
SELECT * from Fornecimentos
WHERE Preco between 15 and 40
order by Preco;