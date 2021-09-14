/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
import {
  onGetPosts,
  deletePost,
  getPost,
  getUser,
  likePost,
  unlikePost,
} from '../../lib/firebase.js';
import { onNavigate } from '../../router/router.js';

export let editStatus = false;
export let editPost;
export let idPostEdit;

export const RendPosts = () => {
  editStatus = false;
  idPostEdit = '';
  editPost = '';

  const user = getUser();
  console.log({ user });
  const posts = document.createElement('div');
  posts.classList.add('container-posts');

  onGetPosts((querySnapshot) => {
    posts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const likedByUser = post.likes.includes(user.email);
      post.id = doc.id;
      posts.innerHTML += `<div class="review-container">
                    <div class="user-data">
                        <p class="getemail">${post.user}</p>
                        <p class="getemail">${post.date}</p>
                    </div>
                    <div class="container-review">
                        <div class="title-rating">
                            <p>Title: ${post.title}</p>
                            <p>Rating: ${post.rating}/10</p>
                        </div>
                        <div class="review-text">
                            <p>${post.review}</p>
                        </div>
                    </div>
                    <div class="texticonspost">
                        <div class="inconDIV-like">
                            <img class="icon-like btn-like" id="likeIcon${post.id}" data-id=${post.id} src="${likedByUser ? '../../img/heart.svg' : '../../img/corazon-vacio.png'}"></img>
                            <p>${post.likes.length === 0 ? '' : post.likes.length}  </p>
                        </div>
                        <div class="delete-edit" id="user-buttons-${post.id}">
                            <img class="icon-post btn-delete" data-id=${post.id} src="../img/icons8-borrar-para-siempre-50.png">
                            <img class="icon-post btn-edit" data-id=${post.id} src="../img/icons8-editar-50.png">
                        </div>
                    </div>
                </div>
                `;

      const deleteEdit = posts.querySelector(`#user-buttons-${post.id}`);

      if (post.user !== getUser().email) {
        deleteEdit.style.display = 'none';
      }

      const btnLike = document.querySelectorAll('.btn-like');

      btnLike.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const btn1 = btn;
          const postId = e.target.dataset.id;
          const docs = await getPost(e.target.dataset.id);
          const thisPost = docs.data();
          if (!thisPost.likes.includes(user.email)) {
            likePost(postId)
              .then(() => {
                btn1.src = '../../img/heart.svg';
                console.log(thisPost.likes);
                console.log('like');
              })
              .catch((error) => {
                console.error('error', error);
              });
          } else {
            unlikePost(postId)
              .then(() => {
                console.log(thisPost.likes);
                btn1.src = '../../img/corazon-vacio.png';
                console.log('unlike');
              })
              .catch((error) => {
                console.error('error', error);
              });
          }
        });
      });

      const btnDelete = document.querySelectorAll('.btn-delete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          // eslint-disable-next-line no-undef
          swal('Are you sure to delete this post');
          await deletePost(e.target.dataset.id);
        });
      });

      const btnEdit = document.querySelectorAll('.btn-edit');
      btnEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const docs = await getPost(e.target.dataset.id);
          editPost = docs.data();

          editStatus = true;
          idPostEdit = doc.id;

          onNavigate('/post');
        });
      });
    });
  });

  return posts;
};
