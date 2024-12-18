export default function TextInput({state,setState}){

    return(
        <input
        className="custom-input"
        type="text" 
        value={state}
        onChange = {(e)=>setState(e.target.value)}

          />
    )
}