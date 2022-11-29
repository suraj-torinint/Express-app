import express from "express";

const appLogger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // url, method, time, date
  let url = req.url;
  let method = req.method;
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  let resultString = `${url} - ${method} - ${date} - ${time}`;
  console.log(resultString);
  next();
};

export default appLogger;
