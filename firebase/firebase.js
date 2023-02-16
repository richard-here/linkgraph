const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set, increment, get, child } = require('firebase/database');
const config = require('./config');

const app = initializeApp(config);
const db = getDatabase(app);

const addClick = async (id) => {
  await set(ref(db, `analytics/${id}`), {
    clicked: increment(1),
  });
};

const getClicks = async() => {
  const snapshot = await get(child(ref(db), `analytics`));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.error("Snapshot does not exist");
  }
};

module.exports = { addClick, getClicks };
