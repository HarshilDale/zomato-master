// Importing Env Variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors"; // cross-origin server
import helmet from "helmet"; // for security
import passport from "passport";

// Configs
import googleAuthConfig from "./config/google.config";

// microservice routes
import Auth from "./API/Auth";

// Database connection
import ConnectDB from "./database/connection";

const zomato = express();

console.log(process.env);

// Application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// Passport Configuration
googleAuthConfig(passport);

// Application Routes
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => res.json({ message: "Setup Success" }));

console.log(process.env.GOOGLE_CLIENT_ID);
zomato.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is running🚀"))
    .catch(() => console.log("Server is running, but DB connection failed..."))
);
