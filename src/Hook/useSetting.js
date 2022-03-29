export const useSetting = (message,addNewMessage) => {

    const addMessage = message.map((mes,i)=> <li key={i}> <div>{mes.message}</div>
        <div>like : {mes.like}</div>  </li> )

    const  handleClick = (value)=>{
        addNewMessage(value.newMessage)
    }
    return {addMessage,handleClick}
}