import  express  from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./midllewares/manipuladorDeErros.js";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Conectado ao MongoDB");
});

const app = express();

app.use(express.json());
routes(app);


app.use(manipuladorDeErros);



export default app;