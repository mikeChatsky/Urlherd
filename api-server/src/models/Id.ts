import { customAlphabet } from 'nanoid';
import { nolookalikes } from 'nanoid-dictionary';

export const ID_LENGTH: number = 10;

export default customAlphabet(nolookalikes, ID_LENGTH);
