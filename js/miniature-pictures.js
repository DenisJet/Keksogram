import photos from './data.js';
import { showBigPic } from './big-picture.js';

const minPicList = document.querySelector('.pictures');
const minPicTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createMinPic = (pic) => {
  const newMinPic = minPicTemplate.cloneNode(true);

  newMinPic.querySelector('.picture__img').src = pic.url;
  newMinPic.querySelector('.picture__comments').textContent = pic.comments.length;
  newMinPic.querySelector('.picture__likes').textContent = pic.likes;

  newMinPic.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPic(pic);
  });

  return newMinPic;
};

const createMinPicList = () => {
  const newMinPicListFragment = document.createDocumentFragment();

  photos.forEach((pic) => {
    newMinPicListFragment.appendChild(createMinPic(pic));
  });

  minPicList.appendChild(newMinPicListFragment);

};

export {createMinPicList};
