const { defineConfig } = require("cypress");
const {addMatchImageSnapshotPlugin}=require("cypress-image-snapshot/plugin");
const values={};
const fs = require('fs');



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on,config);
      config.env.variable=process.env.NODE_ENV ?? 'NO HAY VARIABLE';
      //Plugin para pasar informacion de una pagina a otra
      on('task',{
        guardar(valor){
          const key=Object.keys(valor)[0];
          values[key]=valor[key]
          return null;
        }, 
        obtener(key){
          console.log('values',values);
          return values[key] ?? 'No hay valor';
        },
        //Plugin para escribir en un documento externo
        writeToFile: ({ fileName, content }) => {
          fs.writeFileSync(fileName, content, 'utf8');
          return null;
        }

      });
      config.env.username = 'tomsmith';
      config.env.password = 'SuperSecretPassword!';
      
      return config;
      //Lo agrego aca para usarlo
    },
        //Para hacer un retry de la prueba
        retries:0,
            // retries:{
            //   runMode:2,
            //   openMode:0
            // },
        baseUrl:"https://the-internet.herokuapp.com/",
        env:{
          user:"username",
          password:"password",
        }
  },
});
