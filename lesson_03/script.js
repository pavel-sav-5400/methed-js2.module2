/* eslint-disable no-unused-vars */
'use strict';

const propsList = document.querySelector('.props__list');

const addValue = () => {
  const useStr = prompt('Введите строку');
  propsList.insertAdjacentHTML('beforeend', `<li class="list__item">
${useStr}</li>`);
  if (useStr === null) {
    return alert('!!!');
  }
  return addValue();
};
addValue();
