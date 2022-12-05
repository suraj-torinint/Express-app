import express from "express";
import db from "../config/connection";

const router: express.Router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  db.select("*")
    .from("assets")
    .then((data) => {
      res.status(200).json({
        message: "Data received successfully",
        data: data,
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: "Error occured while fetching assets!",
        errorMsg: error,
      });
    });
});

export default router;
