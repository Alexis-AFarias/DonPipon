import { error } from "console";
import { AppDataSource } from "./config/data-source";
import {PORT} from "./config/envs"
import app from "./server"
import "reflect-metadata"

AppDataSource.initialize()
.then(()=> {
	console.log("Database conectada...")
	app.listen(PORT, ()=>{
		console.log("server listening on port 3000");
	});
})
.catch((error) => console.log(error))

