import { test, expect } from '@playwright/test';
import * as validData from '../../data/userTestData.json';
import * as testData from '../../data/testData.json'
import * as errorMsg from '../../data/errorMsg.json';
import { getUserById, createUser, deleteUser } from '../../helpers/apiHelper';
import { validateUserStructure, validateErrorResponse } from '../../helpers/validationData';

test.describe('Get User API Tests', () => {
 
  let userId: string;

  test('Create User - Valid Data', async () => {
      const user = validData;
      const response = await createUser(user);
      userId = response.data.id;
      expect(response.status).toBe(201);
      validateUserStructure(response.data);
    
  });

  test('Get User by ID - Valid ID', async () => {
    const response = await getUserById(userId);
    expect(response.status).toBe(200);
    validateUserStructure(response.data);
  });

  test('Get User by ID - Invalid ID', async () => {
    const response = await getUserById(testData.notExistingID);
    expect(response.status).toBe(404);
    validateErrorResponse(response.data, errorMsg.notFound, 404);
  });

  test('Get User by ID - Delete User - Valid ID', async () => {
    const response = await deleteUser(userId);
    expect(response.status).toBe(204);
  });

});
