

export const SET_PROJECT_ARCHIVE = 'SET_PROJECT_ARCHIVE';

export const setProjectArchive = (projects) => ({
  type: SET_PROJECT_ARCHIVE,
  payload: projects,
});





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

export const changePageTitle=(title)=>{

    return{
        type:"CHANGE",  
        title:title,
    
     
   }
   
}


export const addProjects=(projectList)=>{
    return{
        type:"ADD_PROJECTS",  
        projectList:projectList,
    
     
   }
   
}

export const decreaseNumber = ()=>{

    return {
        type:"DECREMENT" 
    }
  
}