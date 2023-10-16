// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

import { onCheckboxClick } from './checkboxClick';
import { refs } from './refs';

refs.checkbox.addEventListener('click', onCheckboxClick);
