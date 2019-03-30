# prueba-bs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### configuracion para github pages
En este tutorial vamos a hacer referencia al video “Enviando una aplicación con Vue.js a producción” utilizando Vue CLI 3:

1. En la raíz del proyecto crear el archivo vue.config.js:

touch vue.config.js
Dentro de vue.config.js pegar el codigo:

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/nombreRepositorio/'
    : '/'
}
Donde /nombreRepositorio/ hace referencia al repositorio donde desplegue la aplicación.

2. En la raíz del proyecto crear el archivo deploy.sh

touch deploy.sh
Dentro de deploy.sh pegar el codigo:

#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
Deben reemplazar la palabra <USERNAME> por su usuario de GitHub y <REPO> por el nombre de su repositorio.

En caso de no tener configurado su cuenta de GitHub para conectarse via SSH debe reemplazar:

git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
Por:

git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages
3. Abrir la terminal y moverse a la raíz del proyecto. Luego asignar el permiso de ejecución con el comando:

chmod +x deploy.sh 
4. Finalmente ejecutar el comando deploy.sh con el comando:

./deploy.sh 
Esperar que termine la ejecucion del script y abrir en el navegador nuestra aplicación https://<USERNAME>.github.io/<REPO>/
