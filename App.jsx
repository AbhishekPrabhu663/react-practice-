import AppName from "./components/AppName";
import Firstrow from "./components/1strow";

import Todoitem from "./components/Todoitem";
import Items from "./components/Items"
import Container from "./components/Container"
import InputField from "./components/InputField"
import { useState, useReducer } from "react";
import { IoMdAdd } from "react-icons/io";
import { TodoitemsContext } from "./store/todo-items-store";
import "./App.css"

 const todoItemsReducer =(currTodoItems, action)=>{
   let todoitems2 =currTodoItems;
  if(action.type==='NEW_ITEM'){
     const todoitems2 =[...currTodoItems,
  {name:action.payload.todoName,date:action.payload.todoDate},
  ]
return todoitems2;
}
else if(action.type==='DELETE_ITEM')
 todoitems2 =currTodoItems.filter((item)=>item.name!=action.payload.todoNAME)
 return todoitems2;
   }
function App() {
  const [todoitems1, dispatchTodoitems]=useReducer(todoItemsReducer,[])
  
  
  // const [todoitems1,setTextState]= useState([]);

  const addButton=(todoName, todoDate)=>{
    
  const newItemAction ={
    type: 'NEW_ITEM',
    payload:{
      todoName,
      todoDate
    }
  };
  dispatchTodoitems(newItemAction);
      
  }
  const Deletebutton=(todoNAME)=>{
 const deleteItemAction ={
    type: 'DELETE_ITEM',
    payload:{
      todoNAME,
      
    }
  };

 
dispatchTodoitems(deleteItemAction);
}

    return (
      <TodoitemsContext.Provider value={{
        todoitems1,
        addButton,
        Deletebutton}}>
         
      <Container>
       <AppName/>   
        <Firstrow />
        <Items />    

      </Container>
      </TodoitemsContext.Provider>
  ); 
}

export default App;