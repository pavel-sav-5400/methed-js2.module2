'use strict';

const delElem = document.querySelector('.ads');
delElem.remove();

const liItems = document.querySelectorAll('.item');
const titles = document.querySelectorAll('.item__title');
const propList = document.querySelectorAll('.props__list');
const listItemsTwo = document.querySelectorAll('.props__item_two');
const listItemsThree = document.querySelectorAll('.props__item_five');
const listItemsFour = document.querySelectorAll('.props__item_four');
const listItemsFive = document.querySelectorAll('.props__item_three');

liItems[0].after(liItems[1]);
liItems[3].after(liItems[0]);
titles[4].after(titles[1]);
titles[3].after(titles[4]);
propList[2].before(titles[3]);
listItemsFour[2].after(listItemsFour[5]);
listItemsTwo[7].after(listItemsTwo[8]);
listItemsTwo[8].after(listItemsTwo[9]);

for (let i = 0; i < listItemsFive.length; i++) {
  listItemsThree[i].after(listItemsFive[i]);
}
for (let i = 0; i < listItemsThree.length; i++) {
  propList[4].before(listItemsThree[i]);
}
