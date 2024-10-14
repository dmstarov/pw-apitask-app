import { expect } from '@playwright/test';

/**
 * Validate the structure of a user object.
 * @param user - The user object returned from the API.
 */
export const validateUserStructure = (user: any) => {
  expect(user).toHaveProperty('id');
  expect(user).toHaveProperty('firstName');
  expect(user).toHaveProperty('lastName');
  expect(user).toHaveProperty('email');
  expect(user).toHaveProperty('dateOfBirth');
  expect(user).toHaveProperty('personalIdDocument');
  expect(user.personalIdDocument).toHaveProperty('documentId');
  expect(user.personalIdDocument).toHaveProperty('countryOfIssue');
  expect(user.personalIdDocument).toHaveProperty('validUntil');
};

/**
 * Validate error response structure for invalid input.
 * @param error - The error object returned from the API.
 * @param expectedTitle - The expected error title.
 * @param expectedStatus - The expected HTTP status code.
 */
export const validateErrorResponse = (error: any, expectedTitle: string, expectedStatus: number) => {
  expect(error).toHaveProperty('title', expectedTitle);
  expect(error).toHaveProperty('status', expectedStatus);
  expect(error).toHaveProperty('detail');
};
