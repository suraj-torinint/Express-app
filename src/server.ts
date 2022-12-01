import express from "express";
import appLogger from "./middleware/app.logger";
import apiRouter from "./router/apiRouter";
import userRoutes from "./router/users";

const app: express.Application = express();

const hostname: string = "127.0.0.1";
const port: number = 5000;

// get request
app.get("/", (request: express.Request, response: express.Response) => {
  // response.sendFile(); // for html page response
  // response.json(); // for json response
  // response.download(); // for downloadable response
  // response.send(); // for html tag response
  response.status(200).send(`<h2>Welcome to index page</h2><a href="/users">Users</a><br><a href="/api">Api page</a>`);
});

// configure middleware
app.use(appLogger);

app.use(express.json());

// router configuration
app.use("/api", apiRouter);
app.use("/users", userRoutes);

app.listen(port, hostname, () => {
  console.log(`App running at http://${hostname}:${port}`);
});
