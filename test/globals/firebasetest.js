/**
 * @jest-environment jsdom
 */
import MockFirebase from '../../_mocks_/firebase-mock.js';
import { savePosts } from '../../src/lib/firebase.js';

global.firebase = MockFirebase;

describe('addPost', () => {
  document.body.innerHTML = '<div id="root"></div>';
  it('Could add a post', () => {
    const rootDiv = document.getElementById('root');
    const component = savePosts();
    rootDiv.appendChild(component);
    return savePosts(
      'hola',
      3,
      'review',
      'prueba@prueba.com',
      'Fri Sep 10 2021',
    ).then((data) => {
      expect(data).toBe();
    });
  });
});

global.firebase = {
  initializeApp: () => {},
  auth: () => {},
};
