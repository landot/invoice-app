import { generateRandomId } from "./generateRandomId";

export function getNewIdWithoutDuplicates(existingIds: string[]): string {
  let newId = generateRandomId();
  let attempts = 10;
  while (existingIds.includes(newId) && attempts) {
    attempts--;
    newId = generateRandomId();
  }
  if (!attempts) {
    throw new Error("new ID could not be generated for invoice");
  } else {
    return newId;
  }
}
