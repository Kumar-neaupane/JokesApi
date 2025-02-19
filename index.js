//Joke api

import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//Get a random joke

app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

//Get a specific jokes

app.get("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const findjoke = jokes.find((joke) => joke.id === id);
  res.json(findjoke);
});

//Filter jokes by types
app.get("/filter", (req, res) => {
  const type = req.query.type;
  const filterActivity = jokes.filter((joke) => jokeType === type);
  res.json(filterActivity);
});
//post a new joke
app.post("/jokes", (req, res) => {
  const newJoke = {
    id: jokes.length + 1,
    jokeText: req.body.text,
    jokeType: req.body.type,
  };
  joke.push(newJoke);
  res.json(newJoke);
});

//put a joke
app.put("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const replacejoke = {
    id: id,
    jokeText: req.body.text,
    jokeType: req.body.type,
  };
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  jokes[searchIndex] = replacejoke;
  res.json(replacejoke);
});
//To patch a joke
app.patch("/jokes/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const exjoke = jokes.find((joke)=>joke.id===id)
    const replacejoke ={
        id:id,
        jokeText:req.body.text || exjoke.jokeText,
        jokeType:req.body.type || exjoke.jokeType
    };
    const search = jokes.find((joke)=>joke.id===id);
    jokes[search] =replacejoke;
    res.json(replacejoke);
})

//To Delete a joke
app.delete("/jokes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const searchIndex = jokes.findIndex((joke) => joke.id === id);
    if (searchIndex > -1) {
      jokes.splice(searchIndex, 1);
      res.se+LETE All jokes
  app.delete("/all", (req, res) => {
    const userKey = req.query.key;
    if (userKey === masterKey) {
      jokes = [];
      res.sendStatus(200);
    } else {
      res
        .status(404)
        .json({ error: `You are not authorised to perform this action.` });
    }
  });

app.listen(port, () => {
  console.log(`Server is running in the port number ${port}`);
});

var jokes = [{}, {}];
