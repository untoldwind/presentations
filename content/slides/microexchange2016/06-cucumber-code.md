+++
date = "2016-01-12T18:01:10+01:00"
title = "Example: Cucumber JVM"
weight = 6
presentations = ["microexchange2016"]
markup = "mmark"
+++

{{< highlight "gherkin" >}}
Feature: Manage authors
  Scenario: Add and remove author
    Given: A running book database
    When An author with name "Test Writer" is added
    Then The created author does exists
...
{{< /highlight >}}

{{< highlight "java" >}}
public class AuthorStepdefs {
    ...
    @When("^An author with name \"([^\"]*)\" is added$")
    public void anAuthorWithNameIsAdded(String authorName) throws Throwable {
        Author author = new Author(authorName);
        Request request = Request.Post(config.baseUrl.resolve("/v1/authors"))
                                 .body(JsonHelper.valueToEntity(author));
        HttpResponse response = client.execute(request);

        assertThat(response).isCreated().hasHeader(HttpHeaders.LOCATION);
        authorUri = Optional.of(response.getFirstHeader(HttpHeaders.LOCATION)
                                        .getValue());
    }

    @Then("^The created author does exists$")
    public void theCreatedAuthorDoesExists() throws Throwable {
        Request request = Request.Get(authorUri.orElseThrow(
            () -> new RuntimeException("Author uri not set")));

        author = Optional.of(client.executeJson(request, Author.class));
    }
    ...
{{< /highlight >}}
