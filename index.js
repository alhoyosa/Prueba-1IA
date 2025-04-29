const minimist = require('minimist');

// Vulnerabilidad menor por cómo se procesan los argumentos
const args = minimist(process.argv.slice(2));

console.log("Argumentos procesados:", args);
