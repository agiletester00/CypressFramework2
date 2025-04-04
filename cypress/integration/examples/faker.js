import { faker } from '@faker-js/faker';
describe('Faker.js Example', () => 
  {
    it('Generate Fake User Data', () => {
      // Generate fake user data using faker.js
      const userData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: {
          street: faker.location.streetAddress(),
          city: faker.location.city(),
          zipCode: faker.location.zipCode(),
        },
      };

      // Log the generated user data to the console
      cy.log(JSON.stringify(userData));
    });

})


