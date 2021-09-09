import express from "express";
import cors from "cors"; // cross-origin server
import helmet from "helmet"; // for security

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/", (req, res) => res.json({ message: "Setup Success" }));

zomato.listen(4000, () => console.log("Server is running🚀"));
