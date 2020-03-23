import generate from 'nanoid/generate';
import { nolookalikes } from 'nanoid-dictionary';

export const ID_LENGTH: number = 10;

export default () => generate(nolookalikes, ID_LENGTH);
