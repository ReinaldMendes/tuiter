import e from "express";
import "dotenv/config";
import "./config/conn.js";
import post_router from "./router/post-router.js";
import user_router from "./router/user-router.js";

const app = e();
app.use(e.json());
app.use("/post", post_router);
app.use("/user", user_router);

app.listen(process.env.API_PORT, () => console.log("Server Running"));
