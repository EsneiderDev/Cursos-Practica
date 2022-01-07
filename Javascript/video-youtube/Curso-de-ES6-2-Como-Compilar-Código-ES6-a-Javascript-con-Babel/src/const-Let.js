/**
 * PASOS PARA INSTALAR BABEÑ
 * 1) Una carpeta de tomar archivos para compilar, en este caso la carpeta src
 * 2) Una carpera donde se generaran los archivos compilados, en este casi output
 * 3) crear achivo ppackague.js
 * 4) Ir a la documentacion he irte a "Usage Guide" -> Override -> (shell)
 * 5) Ejecutar el comendo " npm install --save-dev @babel/core @babel/cli @babel/preset-env "
 * 6) ir a la documentacion e inicio en el header, ir a -> "Setup" y CLI -> "Usage"
 * 7) copiar el escripts y copiarlo en el archivo package.json
 *          +   "scripts": {
            +       "build": "babel src -d lib"
            +   },
 * 8) agregar en en "build" la palabra --watc, ejemplo --> "build": "babel src -d lib --watch" para compilarlo al tiempo que guardes cambios
 * 9) crear un archivo en la raiz como ".babelrc"
 * 10) Ir a la documentacion en la misma sesion "Create babel.config.json configuration file", copiamo el json 
 *          {
                "presets": ["@babel/preset-env"]
            } 
    NOTA: el "@babel/preset-env" tiene que coincidir, como la version como el arroba como esta escrito en JSON (tiene que estar el arroba)
 * 
 * 11) escribimos un codigo en ES6 y lo pasamos a Javascript.
 * 12) ejecutamos el comando " npm run build"
 * 
 */

  let nombre = 'Esneider';
  
  console.log(`Mi nombre es ${nombre}`);