import{ 
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL
} from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
function reducer(state = initialState, action){
  console.log('reducer', action);
  switch(action.type){
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs:true,
        error:''
        };
      case FETCH_SMURF_SUCCESS:
        return{
          ...state,
          fetchingSmurfs:false,
          smurfs: action.payload,
          error:''
        };
      case FETCH_SMURF_FAIL:
        return{
          ...state,
          fetchingSmurfs:false,
          error: action.payload
        };

        case ADD_SMURF_START:
        return {
          ...state,
          addingSmurfs:true,
          error:''
          };
        case ADD_SMURF_SUCCESS:
          return{
            ...state,
            addingSmurfs:false,
            smurfs: action.payload,
            error:''
          };
        case ADD_SMURF_FAIL:
          return{
            ...state,
            addingSmurfs:false,
            error: action.payload
          };
  
      default:
        return state;
      }
}

export default reducer;