const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));

console.log('escuchando en el puerto 8100 y 8101');
app.listen(8100);
app.listen(8101);