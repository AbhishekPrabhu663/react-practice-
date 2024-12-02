import styles from "./InputField.module.css"
const InputField=({handleButton})=>{
return(
    <div>
    <input type="text" className={styles.fieldcenter} onChange={handleButton}/>
    </div>
)
}
export default InputField;