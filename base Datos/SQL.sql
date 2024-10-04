
CREATE DATABASE Clientes;


USE Clientes;


CREATE TABLE minoristas (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(50) NOT NULL,        
    apellido VARCHAR(50) NOT NULL,      
    dni VARCHAR(20) NOT NULL,           
    rubro VARCHAR(50)                    
);