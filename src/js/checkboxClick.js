import { THEME_KEY, themeValueDark, themeValueLight } from './const';
import { refs } from './refs';

export function onCheckboxClick() {
  // console.log(refs.checkbox.checked);
  if (refs.checkbox.checked === true) {
    localStorage.setItem(THEME_KEY, themeValueDark);
    refs.body.classList.add('dark');
    refs.body.classList.remove('light');
  }
  if (refs.checkbox.checked === false) {
    localStorage.setItem(THEME_KEY, themeValueLight);
    refs.body.classList.add('light');
    refs.body.classList.remove('dark');
  }
}
