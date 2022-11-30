import express from "express";
import bcrypt from "bcrypt";

const userRoutes: express.Router = express.Router();

userRoutes.get("/", (req: express.Request, res: express.Response) => {
  return res.status(200).send(`Welcome to the User Page`);
});

userRoutes.post("/login", (req: express.Request, res: express.Response) => {
  // to receive form data
  let formdata = req.body;
  res.status(200).json({
    msg: "Form data received successfully",
    formdata: formdata,
  });
});

userRoutes.post("/register", async (req: express.Request, res: express.Response) => {
  // to get the form data from user
  let { name, email, password } = req.body;
  // encrypt password
  let hashPassword = await bcrypt.hash(password, 10);
  res.status(200).json({
    user: { name, email, password },
    hashPassword: hashPassword,
  });
});

export default userRoutes;
