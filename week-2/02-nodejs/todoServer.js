/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
  const express = require('express');
  const bodyParser = require('body-parser');
  const { v4: uuidv4 } = require('uuid');
  // let nanoid= require("nanoid");
// model.id = nanoid()
  
  const app = express();
  
  ///for getting json file
  app.use(bodyParser.json());

  // const todos=[
  //   {
  //   id:1,
  //   title:"add to list",
  //   description:"add this task to my list"
  // },
  // {
  //   id:10,
  //   title:"add to work list",
  //   description:"add this task to work list"
  // }];

  let todos=[];


app.get('/todos',(req,res)=>{
    // console.log(req);
    res.status(200).json(todos);

  });

app.get('/todos/:id',(req,res)=>{

    const requestedId=req.params.id;
    // console.log(requestedId);
    const resultTodo= todos.find((e)=> e.id==requestedId);

    if(resultTodo){
      res.status(200).json(resultTodo)
    }else{
      res.status(404).send("Todo not found");
    }

  });


app.post("/todos",(req,res)=>{

    // res.send(nanoid());
    // res.send(uuidv4());
    let newuuid=uuidv4();
    if(!req.body.title){
      res.status(400).send("invalid");
    }
    let newTodo={
      id:newuuid,
      title:req.body.title,
      description:req.body.description
    }

    todos.push(newTodo);

    res.status(201).json({id:newuuid});

  });

app.put("/todos/:id",(req,res)=>{

    const requestedTodo= todos.find((e)=> e.id==req.params.id);

    if(requestedTodo){

      for (let i = 0; i < todos.length; i++) {

        if(todos[i].id== requestedTodo.id){
          todos[i].title=req.body.title;
          todos[i].description=req.body.description;
        }
        
        
      }

      res.status(200).send("updated");

    }else{
      res.status(400).send("Not found");
    }

  });

app.delete("/todos/:id",(req,res)=>{

    const requestedTodo= todos.find((e)=> e.id==req.params.id);

    if(requestedTodo){
      const updatedtodos= todos.filter((e)=> e.id !=req.params.id);
      todos=[...updatedtodos];
      res.status(200).send("OK");
    }else{
      res.status(400).send("Not found");
    }    
});


  app.all('*',(req,res)=>{

    res.status(404).send("Route not found");

  })



  // app.listen(3000,()=>{
  //   console.log("running ");
  // });
  
  module.exports = app;