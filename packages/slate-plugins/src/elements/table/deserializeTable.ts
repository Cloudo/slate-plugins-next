import { DeserializeHtml } from 'deserializers/types';
import { TableType } from './types';

export const deserializeTable = (): DeserializeHtml => ({
  element: {
    TABLE: () => ({ type: TableType.TABLE }),
    TR: () => ({ type: TableType.ROW }),
    TD: () => ({ type: TableType.CELL }),
  },
});
