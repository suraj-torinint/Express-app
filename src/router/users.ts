import express from "express";

const userRoutes: express.Router = express.Router();

userRoutes.get("/", (req: express.Request, res: express.Response) => {
  return res.status(200).send(`Welcome to the User Page`);
});

userRoutes.post("/login", (req: express.Request, res: express.Response) => {
  // to receive form data
  let formdata: {} = req.body;
  res.status(200).json({
    msg: "Form data received successfully",
    formdata: formdata,
  });
});

export default userRoutes;
