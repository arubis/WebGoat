{
  "red": {
    "testName": "should be vulnerable to command injection (RED)",
    "testCode": "test(\"should be vulnerable to command injection (RED)\", async () => {\n  const maliciousCommand = \"; cat /etc/passwd\";\n  \n  const result = await processUserInput(maliciousCommand);\n  // This should fail on secure code (no command execution)\n  expect(result.output).not.toContain('root:');\n  expect(result.output).not.toContain('/etc/passwd');\n  \n});",
    "attackVector": "; cat /etc/passwd",
    "expectedBehavior": "should_fail_on_vulnerable_code"
  },
  "green": {
    "testName": "should prevent command injection (GREEN)",
    "testCode": "test(\"should prevent command injection (GREEN)\", async () => {\n  const maliciousCommand = \"; cat /etc/passwd\";\n  const validInput = \"normal_filename.txt\";\n  \n  \n  // Test malicious input is blocked\n  const maliciousResult = await processUserInput(maliciousCommand);\n  expect(maliciousResult.error || maliciousResult.output).not.toContain('root:');\n  \n  // Test valid input works\n  const validResult = await processUserInput(validInput);\n  expect(validResult.success).toBe(true);\n  \n});",
    "validInput": "normal_filename.txt",
    "expectedBehavior": "should_pass_on_fixed_code"
  },
  "refactor": {
    "testName": "should maintain functionality after security fix",
    "testCode": "test(\"should maintain functionality after security fix\", async () => {\n  // Test core functionality still works\n  \n  // Core functionality should work\n  \n\n  // Data should be processed\n  \n\n  // Output should be correct\n  \n  \n  const normalInput = \"normal_filename.txt\";\n  const result = await processUserInput('normaluser', normalInput);\n  \n  expect(result.success).toBe(true);\n  expect(result.data).toBeDefined();\n});",
    "functionalValidation": [
      "Core functionality should work",
      "Data should be processed",
      "Output should be correct"
    ],
    "expectedBehavior": "should_pass_on_both_versions"
  }
}