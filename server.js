const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const cookieSession = require("cookie-session");
const mongoose = require("mongoose");

// load database models
require("./models/user");
require("./models/todo");

// keys
const keys = require("./config");

// variables
const mongoConfigs = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

// routes
const { todo: todoRoutes, user: userRoutes } = require("./routes");

const app = express();

// serve static files
app.use(express.static(path.join(__dirname, "public")));

// using body-parser to parse req
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use cookie-session to setup req.cookies
// maxAge set to 1hr
// app.use(cookieSession({ keys: [keys.COOKIE_SECRET], maxAge: 60 * 60 * 1000 }));

// cross-origin support
// if (process.env.NODE_ENV !== "production") {
//     const cors = require("cors");
//     app.use(cors());
// }

app.use("/api/todos", todoRoutes);
app.use("/user", userRoutes);

if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => res.send(path.resolve(__dirname, "/public/index.html")));
}

app.listen(keys.PORT, () => {
    // console.log(`listening on port ${keys.PORT}`);
    mongoose
        .connect(keys.MONGO_URI, mongoConfigs)
        .catch((err) => console.log(`error occured while connecting to mongodb -> ${err}`));
});
