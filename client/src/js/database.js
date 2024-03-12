// Import the openDB function from the 'idb' library
import { openDB } from 'idb';

// Function to initialize the IndexedDB database
const initdb = async () => {
  // Open the 'jate' database with version 1
  openDB('jate', 1, {
    // Upgrade function to handle database upgrades
    upgrade(db) {
      // Check if the object store 'jate' already exists
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create the 'jate' object store with auto-incrementing key 'id'
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
};

// Method to add content to the database
export const putDb = async (content) => {
  // Open the 'jate' database
  const db = await openDB('jate', 1);
  // Start a read-write transaction
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // Add the provided content to the object store
  const request = store.put({id:1, value: content});
  // Complete the transaction
  // await tx.done;
  const result=await request;
};

// Method to get all content from the database
export const getDb = async () => {
  // Open the 'jate' database
  const db = await openDB('jate', 1);
  // Start a read-only transaction
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  // Retrieve all content from the object store
  const request=store.get(1);
  const result=await request;
  return result?.value;
};

// Initialize the IndexedDB database when the script is executed
initdb();