-- CLIENTE;
--CRUD
INSERT INTO CLIENTE(NOME, TELEFONE) VALUES ("","");
SELECT * FROM CLIENTE;
UPDATE CLIENTE SET NOME = "", TELEFONE= "", STATUS=true WHERE ID = 1;
DELETE FROM CLIENTE WHERE ID = 1;

-- PRODUTO;
--CRUD
INSERT INTO PRODUTO(NOME, PRECO) VALUES ("","");
SELECT * FROM PRODUTO;
UPDATE PRODUTO SET NOME = "", PRECO= 0.59 WHERE ID = 1;
DELETE FROM PRODUTO WHERE ID = 1;

-- PEDIDO;
--CRUD
INSERT INTO PEDIDO(ID_CLIENTE, ID_PRODUTO, QUANTIDADE, TOTAL) 
    VALUES ("","");
SELECT * FROM PEDIDO;
UPDATE PEDIDO SET QUANTIDADE = 1 WHERE ID = 1;
DELETE FROM PEDIDO WHERE ID = 1;
