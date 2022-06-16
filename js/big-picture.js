import { isEscEvent } from './util.js';

const bigPic = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPicCancelElement = bigPic.querySelector('.big-picture__cancel');

// скрываем лишнее

const socialCommentCount = bigPic.querySelector('.social__comment-count');
const commentsLoader = bigPic.querySelector('.comments-loader');
socialCommentCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

// функция показа комментариев

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const socialCommentsList = document.querySelector('.social__comments');

const renderComment = (comment) => {
  const commentSimilar = commentTemplate.cloneNode(true);

  commentSimilar.querySelector('.social__picture').src = comment.avatar;
  commentSimilar.querySelector('.social__picture').alt = comment.name;
  commentSimilar.querySelector('.social__text').textContent = comment.message;

  return commentSimilar;
};

const renderComments = (comments) => {
  let commentsListFragment = document.createDocumentFragment();

  comments.forEach(comment => {
    commentsListFragment.appendChild(renderComment(comment));
  })

  socialCommentsList.appendChild(commentsListFragment);
}

// функция вывода большой картинки

const closeBigPic = () => {
  bigPic.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentsList.innerHTML = '';
  bigPicCancelElement.removeEventListener('click', closeBigPic);
}

const onBigPicEscKeyDown = (evt) => {
  if (isEscEvent(evt)) {
    closeBigPic()
    document.removeEventListener('keydown', onBigPicEscKeyDown);
  }
}

const showBigPic = (pic) => {
  body.classList.add('modal-open');
  bigPic.querySelector('.big-picture__img > img').src = pic.url;
  bigPic.querySelector('.likes-count').textContent = pic.likes;
  bigPic.querySelector('.comments-count').textContent = pic.comments.length;
  renderComments(pic.comments);
  bigPic.querySelector('.social__caption').textContent = pic.description;

  document.addEventListener('keydown', onBigPicEscKeyDown)

  bigPicCancelElement.addEventListener('click', closeBigPic);

  bigPic.classList.remove('hidden');
};

export {showBigPic};
