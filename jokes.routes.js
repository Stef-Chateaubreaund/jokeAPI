const jokesControllers = require("../controllers/jokes.controller");


module.exports = app =>{
    app.get("/api/jokes", jokesControllers.findAllJokes); 
    app.post("/api/new", jokesControllers.createJokes); 
    app.get("/api/findjoke/:id", jokesControllers.findOneJoke);
    app.put("/api/update/:id", jokesControllers.updateJoke);  
    app.delete("/api/delete/:id", jokesControllers.deleteJoke); 

    
}