import { Given, When, Then } from "@cucumber/cucumber";
import axios from "axios";
import assert from "assert";
import { Pet, PetResponse, Status } from "../support/models";
import * as data from "../support/data";

const client = axios.create({
  baseURL: process.env.BASE_URL || "https://petstore.swagger.io/v2",
  headers: { api_key: 'PeterZosiak' }
});

let pet: Pet;
let pets: Pet[] = [];
let petResponse: PetResponse;

Given('I have open beer and say Cheeers', function () {
  console.log('Cheers!');
});

When('I create a new pet with name {string} and status {string} and category {string}',
  async function (name: string, status: string, category: string) {

    const newPet: Pet = {
      "id": 0,
      "category": {
        "id": 0,
        "name": category
      },
      "name": name,
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": status as Status
    }

    const res = await client.post('/pet', newPet)
    assert.equal(res.status, 200);
    pet = res.data;

  });


When('I search for pets by status {string}', async function (status: string) {
  const res = await client.get(`/pet/findByStatus?status=${status}`)
  assert.equal(res.status, 200);
  pets = res.data;

});

When('I search for pet by Id {int}', async function (id: number) {
  const res = await client.get(`/pet/${id}`)
  assert.equal(res.status, 200);
  pet = res.data;

});

When('I search for pet by invalid Id {int}', async function (id: number) {
  const res = await client.get(`/pet/${id}`).catch(err => err.response);
  assert.equal(res.status, 404);
  petResponse = res.data;

});

Then('all pets should have {string} status', async function (status) {
  pets.forEach(pet => {
    assert.equal(pet.status, status);
  });
});

Then('all pets should be empty', function () {
  assert.equal(pets.length, 0);
});

Then('the expected pet with Id {int} should be returned', function (id: number) {
  assert.deepEqual(pet, data.getPetById(id));
});

Then('the pet should have name {string} and status {string} and category {string} and id {int}',
  function (name: string, status: string, category: string, id: number) {
    assert.equal(pet.name, name);
    assert.equal(pet.status, status);
    assert.equal(pet.category.name, category);
    assert.equal(pet.id, id);
  });

Then('the pet should have name {string} and status {string} and category {string}',
  function (name: string, status: string, category: string) {
    assert.equal(pet.name, name);
    assert.equal(pet.status, status);
    assert.equal(pet.category.name, category);
  });

Then('I should get an error with message {string}', function (msg: string) {
  assert.equal(petResponse.message, msg);
});