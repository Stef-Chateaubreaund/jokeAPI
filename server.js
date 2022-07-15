

const express = require("express");
const app = express();
const port = 8000;



require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

// sending the app over to jokes.route files in the route folder inside the server folder
require("./routes/jokes.routes")(app);


app.listen(port, ()=> console.log(`Running on ${port}`));