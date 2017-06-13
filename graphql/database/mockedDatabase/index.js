import uuid from 'uuid-js';
import wrapLogger from '../../utils/wrapLogger';
import wrapPromise from '../../utils/wrapPromise';

const database = {
  getViewer: (_params) => ({
    id: uuid.create().toString(),
    name: 'Sam Asefa',
  }),
  getFunds: (_params) => ([{
    id: uuid.create().toString(),
    name: 'Alphabet Fund',
    ticker: 'ABCD'
  },
  {
    id: uuid.create().toString(),
    name: 'Fast Fund',
    ticker: 'ZOOM'
  }])
};

export default wrapLogger(wrapPromise(database));
