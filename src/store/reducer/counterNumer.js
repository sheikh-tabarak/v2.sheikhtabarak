const initialState=0;

const changePageTitle=(state=initialState, action)=>{
    switch (action.type) {
        case "CHANGE" : return action.title
        default: return state
    }
}
export default changePageTitle;