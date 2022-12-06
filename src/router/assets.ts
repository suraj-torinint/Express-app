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

router.get("/is_active", (req: express.Request, res: express.Response) => {
  db("assets")
    .select("name", "hdd", "ssd", "status", "ram", "processor", "operating_system")
    .where("is_active", "=", "0")
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

router.get("/:asset_id", (req: express.Request, res: express.Response) => {
  const id: string = req.params.asset_id;
  db.select("*")
    .from("assets")
    .where("assetId", "=", id)
    .then((data) =>
      res.status(200).json({
        message: "Data received successfully",
        data: data,
      }),
    )
    .catch((error) => {
      res.status(400).json({
        error: "Error occured while fetching assets!",
        errorMsg: error,
      });
    });
});

export default router;
