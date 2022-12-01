import express from "express";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";

const userRoutes: express.Router = express.Router();

userRoutes.get("/", (req: express.Request, res: express.Response) => {
  return res.status(200).send(`<h2>Welcome to User Page</h2> <a href="/">Home</a>`);
});

userRoutes.post("/login", (req: express.Request, res: express.Response) => {
  // to receive form data
  let formdata = req.body;
  res.status(200).json({
    msg: "Form data received successfully",
    formdata: formdata,
  });
});

/*
  fields : name, email, password
*/
userRoutes.post(
  "/register",
  [
    body("name").not().isEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("email is required"),
    body("password").isLength({ min: 5 }).withMessage("Min 5 characters are required")
  ],
  async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // to get the form data from user
    let { name, email, password } = req.body;
    // encrypt password
    let hashPassword = await bcrypt.hash(password, 10);
    res.status(200).json({
      user: { name, email, password },
      hashPassword: hashPassword,
    });
  },
);

export default userRoutes;
