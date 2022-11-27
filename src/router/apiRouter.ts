import express from "express";

const apiRouter: express.Router = express.Router();

// logic
apiRouter.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(`
  <h2>Welcome to api router</h2> `);
});


apiRouter.get("/test", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    "name":"suraj",
    "surname" : "mahamuni"
  });
});

export default apiRouter;
