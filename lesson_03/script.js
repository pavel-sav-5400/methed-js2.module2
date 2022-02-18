'use strict';

const propsList = document.querySelector('.props__list');
const delLastElem = () => propsList.lastChild.remove();
const clearList = () => propsList.textContent = '';

propsList.style.cssText = `
  font-size: 25px;
  color: darkgreen;
  font-style: italic;
  font-weight: bold;
`;

const getUseStr = () => {
  const useStr = prompt('Введите строку').trim();
  propsList.insertAdjacentHTML('beforeend', `<li class="list__item">
${useStr}</li>`);
  if (useStr === null || useStr === 'exit') {
    return delLastElem();
  }
  if (useStr === 'clear') {
    return clearList();
  }
  if (useStr === '') {
    delLastElem();
    return getUseStr();
  }
  return getUseStr();
};
getUseStr();
