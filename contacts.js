const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

async function listContacts() {
  const data = await fs.readFile(contactsPath, err => {
    if (err) {
      throw err;
    }
  });
  const content = JSON.parse(data);
  console.table(content);
}
// listContacts();

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath, err => {
    if (err) {
      throw err;
    }
  });
  const content = JSON.parse(data);
  const filteredContact = content.filter(contact => contact.id === contactId);
  console.table(filteredContact);
}
// getContactById(3);

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath, err => {
    if (err) {
      throw err;
    }
  });
  const content = JSON.parse(data);
  const filteredContacts = content.filter(contact => contact.id !== contactId);
  //   console.table(filteredContacts);
  await fs.writeFile(
    contactsPath,
    JSON.stringify(filteredContacts, null),
    err => {
      if (err) {
        throw err;
      }
    },
  );
}
// removeContact(20);

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, err => {
    if (err) {
      throw err;
    }
  });
  const content = JSON.parse(data);
  const id = Date.now();
  content.push({ id, name, email, phone });
  await fs.writeFile(contactsPath, JSON.stringify(content, null), err => {
    if (err) {
      throw err;
    }
  });
  console.table(content);
}
// addContact('sergey', 'preborist@getMaxListeners.com', '545457785');

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
