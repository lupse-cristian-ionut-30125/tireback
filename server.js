const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3123;
//db
mysqldb = require("./db").connection;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:4200", // Modifică cu originea ta de dezvoltare
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/data", (req, res) => {
  const details = req.body;
  mysqldb.query(
    "INSERT INTO TyreCondition SET ?",
    details,
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
});

app.get("/data", (req, res) => {
  mysqldb.query("SELECT * FROM TyreCondition", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
