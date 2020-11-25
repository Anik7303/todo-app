import axios from "axios";

export default axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "https://todo-app-9i4gle5a.herokuapp.com"
            : "http://localhost:5000",
});
