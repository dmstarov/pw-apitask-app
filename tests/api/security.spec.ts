import { test, expect } from '@playwright/test';
import { createUser, getUserById, updateUser, deleteUser } from '../../helpers/apiHelper';
import { validateErrorResponse } from '../../helpers/validationData';
import * as validData from '../../data/userTestData.json';
import * as errorMsg from '../../data/errorMsg.json';
import * as testData from '../../data/testData.json';


test.describe('Unauthorized Access Tests', () => {

  test('Unauthorized - Create User without Authorization', async () => {
    const response = await createUser(validData, { Authorization: 'InvalidToken' });
    expect(response.status).toBe(401);
    validateErrorResponse(response.data, errorMsg.unAuth, 401);
  });

  test('Unauthorized - Get User by ID without Authorization', async () => {
    const response = await getUserById(testData.notExistingID, { Authorization: 'InvalidToken' });
    expect(response.status).toBe(401);
    validateErrorResponse(response.data, errorMsg.unAuth, 401);
  });

  test('Unauthorized - Update User without Authorization', async () => {
    const response = await updateUser(testData.notExistingID, { firstName: 'Jane' }, { Authorization: 'InvalidToken' });
    expect(response.status).toBe(401);
    validateErrorResponse(response.data, errorMsg.unAuth, 401);
  });

  test('Unauthorized - Delete User without Authorization', async () => {
    const response = await deleteUser(testData.notExistingID, { Authorization: 'InvalidToken' });
    expect(response.status).toBe(401);
    validateErrorResponse(response.data, errorMsg.unAuth, 401);
  });

});
