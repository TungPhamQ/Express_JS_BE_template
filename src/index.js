//app.use("/api",router)
import express from "express"
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routers/router.js";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server up on port ${PORT}`);
});
