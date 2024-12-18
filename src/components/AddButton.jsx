
export default function AddButton({ children, dispatch, type, payload }) {
    return (
        // this is a button that will dispatch an action to the reducer
        // dispatch means to send off to the reducer 
        // type is the action type
        // payload is the data that will be sent to the reducer
        // children is the text that will be displayed on the button
        
        <button onClick={() => dispatch({ type: type, payload:payload })}>
            {children}
            </button>  
    )

}