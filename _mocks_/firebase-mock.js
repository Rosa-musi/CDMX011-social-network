const firestore = () => ({
  collection: (nameColection) => ({
    doc: () => ({
      set: (objData) => new Promise((resolve) => {
        resolve('el post fue añadido');
      }),
    }),
  }),
});

const firebase = {
  firestore,
};

export default jest.fn(() => firebase);

/* const firestores = () => {
  return {
    collection: (nameColection) => {
      return {
        add: () => {
            return new Promise((resolve) => {
                resolve('la nota fue agregada')
            })
        },
      };
    },
  };
};
export default jest.fn(() => {
  return firebase;
});
*/
