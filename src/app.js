import express from "express";
import config from "./config";
import ventasRouters from "./routers/ventasRouters"

const app = express();


app.set('port', config.port );

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(ventasRouters);

export default app;