import { createReducer } from 'redux-act'
import { increment } from '../actions/counter'

const counterReducer = createReducer({
  [increment]: (state) => state + 1
}, 0)

export default counterReducer
