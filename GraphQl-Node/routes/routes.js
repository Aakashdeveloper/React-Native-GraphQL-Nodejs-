import express from "express";
import fs from "fs";
import { checkSchema, validationResult } from "express-validator/check";

import ToDo from "../mongoose/todo";
import bookingValidationSchema from "../validations/booking";

const router = express.Router();
const data = JSON.parse(fs.readFileSync("./hotel.json", "utf8"));

function handleError(res, error) {
  const message = typeof error === "object" ? error.message : error;
  res.status(500).json({ status: "N", errors: [{ msg: message }] });
}

router.get("/graphqlhotels", (req, res) => {
  res.send(data);
});

router.post("/booking", checkSchema(bookingValidationSchema), (req, res) => {
  // check if validation failed
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: "N", errors: errors.array() });
  }

  const todoItem = new ToDo({
    itemId: 2,
    city: req.body.city,
    hotel: req.body.hotel,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    cover: req.body.cover,
    completed: false
  });

  todoItem.save((err, result) => {
    if (err) {
      console.error("Operation failed while saving ToDoItem" + err);

      handleError(res, err);
      return;
    }

    res.status(200).json({ status: "Y" });
  });
});

export default router;
