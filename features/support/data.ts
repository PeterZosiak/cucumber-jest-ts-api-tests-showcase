import { Pet, Status } from "./models";

export const expectedPets: Pet[] = [
  {
    "id": 10,
    "category": {
      "id": 10,
      "name": "sample string"
    },
    "name": "doggie",
    "photoUrls": [
      "sample 1",
      "sample 2",
      "sample 3"
    ],
    "tags": [
      {
        "id": 10,
        "name": "sample string"
      },
      {
        "id": 10,
        "name": "sample string"
      }
    ],
    "status": Status.available
  },
  {
    "id": 2,
    "category": {
      "id": 1,
      "name": "string"
    },
    "name": "doggie 2",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 1,
        "name": "string"
      }
    ],
    "status": Status.available
  }]

export function getPetById(id: number): Pet {
  return expectedPets.find(pet => pet.id === id) || {} as Pet;
}