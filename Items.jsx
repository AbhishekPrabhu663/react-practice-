import {useContext} from "react";
import {TodoitemsContext} from "../store/todo-items-store"
import Todoitem from "./Todoitem"
const Items=()=>{
   const {todoitems1}=useContext(TodoitemsContext)

    return(
    <div>
    {todoitems1.map((item)=>(<Todoitem todoname={item.name} tododate={item.date} key={item.name}  />))}
       </div>
    )
}
export default Items;