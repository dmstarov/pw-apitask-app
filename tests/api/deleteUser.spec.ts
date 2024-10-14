import { test, expect } from '@playwright/test';
import { deleteUser, createUser, getUserById } from '../../helpers/apiHelper';
import * as validData from '../../data/userTestData.json';
import * as testData from '../../data/testData.json';
import * as errorMsg from '../../data/errorMsg.json';
import { validateErrorResponse, validateUserStructure } from '../../helpers/validationData';

test.describe('Delete User API Tests', () => {
  let userId: string;

  test('Create User - Valid Data', async () => {
      const user = validData;
      console.log(user.firstName);
      const response = await createUser(user);
      userId = response.data.id;
      expect(response.status).toBe(201);
      validateUserStructure(response.data);
    
  });

  test('Delete User - Valid ID', async () => {
    const response = await deleteUser(userId);
    expect(response.status).toBe(204);
  });

  test('Delete User - Non-Existing ID', async () => {
    const response = await deleteUser(testData.notExistingID);
    expect(response.status).toBe(404);
    validateErrorResponse(response.data, errorMsg.notFound, 404);
  });

  test('Delete User - Get User by ID', async () => {
    const response = await getUserById(userId);
    expect(response.status).toBe(404);
    validateErrorResponse(response.data, errorMsg.notFound, 404);
  });

});
