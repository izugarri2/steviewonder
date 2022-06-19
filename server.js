const express = require("express");
const app = express();
const port = process.env.PORT || 10000;

app.use(express.static(__dirname+'/'));
app.set('x-powered-by', false);
app.listen(port, () => console.log(`app listening for glitch on port ${port}!`));