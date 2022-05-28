import app from "./app";

app.listen(app.get('port'));

console.log("emitido en ",app.get('port'));  