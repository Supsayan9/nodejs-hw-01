import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

async function generateContacts(count = 5) {
  const contacts = await readContacts();
  const newContacts = Array.from({ length: count }, createFakeContact);
  contacts.push(...newContacts);
  await writeContacts(contacts);
  console.log('Contacts generated!');
}

generateContacts(5);
