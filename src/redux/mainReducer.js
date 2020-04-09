import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView27437Reducer from '../features/CalendarView27437/redux/reducers';
import EmailAuth27390Reducer from '../features/EmailAuth27390/redux/reducers';
import CalendarView27388Reducer from '../features/CalendarView27388/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView27437: CalendarView27437Reducer,
EmailAuth27390: EmailAuth27390Reducer,
CalendarView27388: CalendarView27388Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});