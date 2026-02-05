package org.owasp.webgoat.integration;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class CustomGoatSQLInjectionTest {

  @Test
  void shouldNotUseDangerousStringConcatenationInQueryConstruction() throws IOException {
    Path sourceFile = Paths.get("src/main/resources/webgoat/static/js/goatApp/support/CustomGoat.js");
    String sourceCode = Files.readString(sourceFile);
    
    boolean hasDangerousConcatenation = sourceCode.contains("+ fromField.value() +") 
        || sourceCode.contains("+ toField.value() +")
        || (sourceCode.contains("'<from>' +") && sourceCode.contains("fromField"));
    
    Assertions.assertThat(hasDangerousConcatenation)
        .describedAs("Code must not concatenate user input directly into XML/SQL queries - this enables injection attacks")
        .isFalse();
  }
}