export const logIn = ()=>{
    console.log("inside the function + ")

    return{
        type:"LOGIN"
   }
   
}

export const logOut = ()=>{

    return {
        type:"LOGOUT" 
    }
  
}


export const increaseNumber = ()=>{

    return{
        type:"INCREMENT"
   }
   
}

export const decreaseNumber = ()=>{

    return {
        type:"DECREMENT" 
    }
  
}