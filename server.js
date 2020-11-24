const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

// keys
const keys = require("./config");

const app = express();

// cross-origin support
if (process.env.NODE_ENV !== "production") {
    const cors = require("cors");
    app.use(cors());
}

app.listen(keys.PORT, () => console.log(`listening on port ${PORT}`));
