import { Given, When, Then } from "@cucumber/cucumber";
import axios from "axios";
import assert from "assert";
import { Pet } from "../support/models";

const client = axios.create({
  baseURL: process.env.BASE_URL || "https://petstore.swagger.io/v2",
});

let pets: Pet[] = [];

When('I search for pets by status {string}', async function (status: string) {
  const res = await client.get(`/pet/findByStatus?status=${status}`)
  assert.equal(res.status, 200);
  pets = res.data;

});

Then('all pets should have {string} status', async function (status) {
  pets.forEach(pet => {
    assert.equal(pet.status, status);
  });
});