import { test, expect } from '@playwright/test';
import * as validData from '../../data/userTestData.json';
import * as invalidData from '../../data/invalidUserData.json';
import * as errorMsg from '../../data/errorMsg.json';
import { createUser, deleteUser } from '../../helpers/apiHelper';
import { validateUserStructure, validateErrorResponse } from '../../helpers/validationData';

test.describe('Create User API Tests', () => {

  let userId: string;


  test('Create User - Valid Data', async () => {
      const user = validData;
      const response = await createUser(user);
      userId = response.data.id;
      expect(response.status).toBe(201);
      validateUserStructure(response.data);
    
  });

  test('Create User - Invalid Data - Missing mandatory field, name', async () => {
      const user = invalidData;
      const response = await createUser(user);
      expect(response.status).toBe(400);
      validateErrorResponse(response.data, errorMsg.invInput, 400);  
  });

  test('Create user - Delete User - Valid ID', async () => {
    const response = await deleteUser(userId);
    expect(response.status).toBe(204);
  });


});
