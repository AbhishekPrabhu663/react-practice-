import styles from "./Itemcontainer.module.css"
import {useContext} from "react";
import {TodoitemsContext} from "../store/todo-items-store"
function Todoitem({todoname ,tododate,ondeletee}){
   const {Deletebutton}=useContext(TodoitemsContext)
    return(
    <div className={styles.ItemContainer}>
     <div className="row rowkg">
          <div className="col-4">
       {todoname}
          </div>
          <div className="col-4">
          {tododate}
          </div>
          <div className="col-3">
    <button type="button" className="btn btn-danger kgbutton" onClick={() => Deletebutton(todoname)}>Delete</button>
          </div>
        </div>
  </div>
    )
}
export default Todoitem;