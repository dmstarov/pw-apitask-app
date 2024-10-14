import { test, expect } from '@playwright/test';
import * as validData from '../../data/userTestData.json';
import * as testData from '../../data/testData.json';
import * as errorMsg from '../../data/errorMsg.json';
import { updateUser, createUser, deleteUser } from '../../helpers/apiHelper';
import { validateUserStructure, validateErrorResponse } from '../../helpers/validationData';

test.describe('Update User API Tests', () => {
  let userId: string;
  const user = validData;


  test('Create User - Valid Data', async () => {
      //const user = validData;
      const response = await createUser(user);
      userId = response.data.id;
      expect(response.status).toBe(201);
      validateUserStructure(response.data);
    
  });

  test('Update User - Valid Data', async () => {
    const updatedData = {
      firstName: testData.editName,
      lastName: testData.editlastName
    };
    const response = await updateUser(userId, updatedData);
    expect(response.status).toBe(200);
    validateUserStructure(response.data);
    expect(response.data.firstName).toBe(testData.editName);
  });

  test('Update User - Non-Existing ID', async () => {
    const response = await updateUser(testData.notExistingID, { firstName: "Jane" });
    expect(response.status).toBe(404);
    validateErrorResponse(response.data, errorMsg.notFound, 404);
  });

  test('Update user - Delete User - Valid ID', async () => {
    const response = await deleteUser(userId);
    expect(response.status).toBe(204);
  });

});
