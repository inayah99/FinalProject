import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js"
import SequelizeStore from "connect-session-sequelize";
import router from "./routes/index.js";
import RecipeRoute from "./routes/RecipeRoute.js";
// import AuthRoute from './routes/AuthRoute.js';
import fileUpload from 'express-fileupload';
import {getRecipe} from "./controllers/RecipesController.js"
dotenv.config();

const app =  express();

try {
    await db.authenticate();
    console.log('Database Connected...')
} catch (error) {
    console.error(error);
}

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
})

// (async()=>{
//     await db.sync();
// })()

// app.use(session({
//     secret: process.env.SESS_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     store: store,
//     cookie: {
//         secure: 'auto'
//     }
// }))

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());
app.use(router);
app.use(RecipeRoute);
// app.use(AuthRoute);
// RecipeRoute()
// const router = express.Router();
//     console.log("hallo");
// router.get('/recipes', getRecipe);



// store.sync();


app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...');
});