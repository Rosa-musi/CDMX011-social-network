/* eslint-disable no-unused-vars */
const createUserWithEmailAndPassword = (email, password) => console.log("hi firebase")
const signInWithEmailAndPassword = (email, password) => console.log("hi firebase")

const firebase = {
  auth: {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  },
};

export default firebase;

/*
const firestores = () => {
  return {
    collection: (nameColection) => {
      return {
          doc: () => {
              return {
                set: () => {
                    return new Promise((resolve) => {
                        resolve('la nota fue agregada')
                    })
                },
              }
          }
      };
    },
  };
};

export default jest.fn(() => {
  return firebase;
}); */
