{
  "red": {
    "testName": "should be vulnerable to denial of_service (RED)",
    "testCode": "test(\"should be vulnerable to denial of_service (RED)\", async () => {\n  const maliciousInput = \"(a+)+$\";\n  \n  const start = Date.now();\n  const result = await processUserInput(maliciousInput);\n  const duration = Date.now() - start;\n  // Should complete quickly (vulnerability exists if it takes too long)\n  expect(duration).toBeLessThan(1000);\n  \n});",
    "attackVector": "(a+)+$",
    "expectedBehavior": "should_fail_on_vulnerable_code"
  },
  "green": {
    "testName": "should prevent denial of_service (GREEN)",
    "testCode": "test(\"should prevent denial of_service (GREEN)\", async () => {\n  const maliciousInput = \"(a+)+$\";\n  const validInput = \"normal_text\";\n  \n  \n  // Test with malicious input - should complete quickly\n  const start = Date.now();\n  const result = await processUserInput(maliciousInput);\n  const duration = Date.now() - start;\n  expect(duration).toBeLessThan(100); // Should be fast\n  \n  // Test with valid input\n  const validResult = await processUserInput(validInput);\n  expect(validResult).toBeTruthy();\n  \n});",
    "validInput": "normal_text",
    "expectedBehavior": "should_pass_on_fixed_code"
  },
  "refactor": {
    "testName": "should maintain functionality after security fix",
    "testCode": "test(\"should maintain functionality after security fix\", async () => {\n  // Test core functionality still works\n  \n  // Core functionality should work\n  \n\n  // Data should be processed\n  \n\n  // Output should be correct\n  \n  \n  const normalInput = \"normal_text\";\n  const result = await processUserInput('normaluser', normalInput);\n  \n  expect(result.success).toBe(true);\n  expect(result.data).toBeDefined();\n});",
    "functionalValidation": [
      "Core functionality should work",
      "Data should be processed",
      "Output should be correct"
    ],
    "expectedBehavior": "should_pass_on_both_versions"
  }
}