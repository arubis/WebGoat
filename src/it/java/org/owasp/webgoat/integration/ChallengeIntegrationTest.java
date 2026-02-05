package org.owasp.webgoat.integration;

import org.junit.jupiter.api.Test;
import java.nio.file.Files;
import java.nio.file.Paths;
import static org.assertj.core.api.Assertions.assertThat;

public class CustomGoatSQLInjectionStaticTest extends IntegrationTest {

  @Test
  void shouldNotUsStringConcatenationForXMLConstruction() throws Exception {
    String sourceCode = new String(Files.readAllBytes(
        Paths.get("src/main/resources/webgoat/static/js/goatApp/support/CustomGoat.js")
    ));

    assertThat(sourceCode)
        .as("Code should not concatenate user input into XML/queries")
        .doesNotContain("+ fromField.value()")
        .doesNotContain("+ toField.value()");

    assertThat(sourceCode)
        .as("Code should use safe XML construction methods")
        .containsAnyOf("textContent", "createElement", "setAttribute", "escapeXml");
  }
}