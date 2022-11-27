import express from "express";
import apiRouter from "./router/apiRouter";
import userRoutes from "./router/users";


const app: express.Application = express();

const hostname: string = "127.0.0.1";
const port: number = 5000;

// get request
// app.get("/", (request: Request, response: Response) => {
  //   // response.sendFile(); // for html page response
  //   // response.json(); // for json response
  //   // response.download(); // for downloadable response
  //   // response.send(); // for html tag response
  //   response.status(200).send(`<h3>Welcome to index page</h3>`);
  // });
  
app.use(express.json());

// router configuration
app.use("/api", apiRouter);
app.use("/users", userRoutes);

app.listen(port, hostname, () => {
  console.log(`App running at http://${hostname}:${port}`);
});
