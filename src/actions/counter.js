import { createAction } from 'redux-act'
import Promise from 'bluebird'

export const increment = createAction('INCREMENT', async () => await Promise.resolve().delay(1000))
