# CURSO FULLSTACK -  FRENON

## Ejemplo de uso de envío de email

En el siguiente ejemplo se realiza una implementación para enviar un email con la librería nodemailer y una cuenta de Gmail.

***
## Uso

En la terminal ejecutar:
```
node envioEMail.js  NOMBRE EMAIL
```

Los parámetros `NOMBRE` `EMAIL` usados al ejecutar la aplicación nodejs serán recibidos a través de `process.argv[2]` y `process.argv[3]` y serán asignado a un objeto para generar el template y envió de email.


***
## Recursos

* Librería para envío de emails; 
[Nodemailer](https://nodemailer.com/about/)



## Usar el repositorio
…or create a new repository on the command line
```
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/mortegac/frenon-envio-mail-nodejs.git
git push -u origin master
```            
…or push an existing repository from the command line
```
git remote add origin https://github.com/mortegac/frenon-envio-mail-nodejs.git
git branch -M master
git push -u origin master
```