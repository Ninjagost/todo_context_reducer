const namesReducer = (state, action) => {
    switch (action.type) {
      case "NEW_NAME":
        return {
          ...state,
          names: {
            post: action.payload.post,
            id: action.payload.id
          }
        };
    
  
      case "PUSH_NAME":
        return {
          ...state,
          allNames: action.payload,
          names: { post: "", id: "" }
        };

      default:
        throw new Error("Problems");
    }
  };
  
  export default namesReducer;
  