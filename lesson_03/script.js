'use strict';

const propsList = document.querySelector('.props__list');
const delLastElem = () => propsList.lastChild.remove();
const clearList = () => propsList.textContent = '';

propsList.style.cssText = `
font-size: 20px;
color: darkgreen;
`;

const addValue = () => {
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
    return addValue();
  }
  return addValue();
};
addValue();
