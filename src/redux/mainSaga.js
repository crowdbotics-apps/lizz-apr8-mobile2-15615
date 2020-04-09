import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth27390Saga from '../features/EmailAuth27390/redux/sagas';
import CalendarView27388Saga from '../features/CalendarView27388/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth27390Saga,
CalendarView27388Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}