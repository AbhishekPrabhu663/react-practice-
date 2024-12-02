import styles from "./Itemcontainer.module.css";
import {useRef} from "react";
import { IoMdAdd } from "react-icons/io";
import {useContext} from "react";
import {TodoitemsContext} from "../store/todo-items-store"

function Firstrow(){
  const {addButton}=useContext(TodoitemsContext)
 const todoName=useRef()
const todoDate=useRef()

const SuccessButtonClicked=(event)=>{
  event.preventDefault() 
    const todoName1=todoName.current.value;
    const todoDate1=todoDate.current.value;
    todoName.current.value="";
     todoDate.current.value="";
    addButton(todoName1,todoDate1)
  }
   
    return(
    <div className={styles.ItemContainer}>
    <form className="row rowkg" onSubmit={SuccessButtonClicked}>
    <div className="col-4">
    <input type="text"   placeholder="Enter Todo here"  ref={todoName} />
    </div>
    <div className="col-4">
    <input type="date" ref={todoDate}  />
    </div>
    <div className="col-3">
    <button type="submit" className="btn btn-success kgbutton" ><IoMdAdd /></button>
    </div>
  </form>
  </div>
    )
}
export default Firstrow;