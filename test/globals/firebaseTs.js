global.firebase = {
  initializeApp: () => console.log('hi firebase'),
  auth: () => ({
    signInWithEmailAndPassword: () => Promise.resolve(),
    createUserWithEmailAndPassword: () => Promise.resolve(),
    signInWithPopup: () => Promise.resolve(),
  }),
  firestore: () => ({
    collection: () => ({
      doc: () => ({
        set: () => console.log('hi set'),
      }),
    }),
  }),
};
