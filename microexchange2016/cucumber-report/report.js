$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("de/leanovate/bookdb/blackbox/authors.feature");
formatter.feature({
  "line": 1,
  "name": "Manage authors",
  "description": "",
  "id": "manage-authors",
  "keyword": "Feature"
});
formatter.before({
  "duration": 221599188,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Add and remove author",
  "description": "Given: A running book database",
  "id": "manage-authors;add-and-remove-author",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "An author with name \"Test Writer\" is added",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The created author does exists",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "The author has the name \"Test Writer\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "The author is deleted",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The author does not exists",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test Writer",
      "offset": 21
    }
  ],
  "location": "AuthorStepdefs.anAuthorWithNameIsAdded(String)"
});
formatter.write("POST /v1/authors HTTP/1.1\nContent-Length: 32\nContent-Type: application/json; charset\u003dUTF-8\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n\n{\n  \"id\" : null,\n  \"name\" : \"Test Writer\"\n}");
formatter.write("HTTP/1.1 201 Created\nLocation: http://localhost:8080/v1/authors/a0c1582b-348d-4bd7-b428-1d497b7a1990\nDate: Mon, 18 Jan 2016 07:07:39 GMT\nContent-Length: 0\n\n\u003c\u003c\u003c\u003c empty body \u003e\u003e\u003e\u003e");
formatter.result({
  "duration": 5745824281,
  "status": "passed"
});
formatter.match({
  "location": "AuthorStepdefs.theCreatedAuthorDoesExists()"
});
formatter.write("GET /v1/authors/a0c1582b-348d-4bd7-b428-1d497b7a1990 HTTP/1.1\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n");
formatter.write("HTTP/1.1 200 OK\nContent-Type: application/json; charset\u003dutf-8\nDate: Mon, 18 Jan 2016 07:07:39 GMT\nContent-Length: 66\n\n{\n  \"id\" : \"a0c1582b-348d-4bd7-b428-1d497b7a1990\",\n  \"name\" : \"Test Writer\"\n}");
formatter.result({
  "duration": 22717855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Writer",
      "offset": 25
    }
  ],
  "location": "AuthorStepdefs.theAuthorHasTheName(String)"
});
formatter.result({
  "duration": 331516,
  "status": "passed"
});
formatter.match({
  "location": "AuthorStepdefs.theAuthorIsDeleted()"
});
formatter.write("DELETE /v1/authors/a0c1582b-348d-4bd7-b428-1d497b7a1990 HTTP/1.1\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n");
formatter.write("HTTP/1.1 204 No Content\nDate: Mon, 18 Jan 2016 07:07:39 GMT\n");
formatter.result({
  "duration": 9274772,
  "status": "passed"
});
formatter.match({
  "location": "AuthorStepdefs.theAuthorDoesNotExists()"
});
formatter.write("GET /v1/authors/a0c1582b-348d-4bd7-b428-1d497b7a1990 HTTP/1.1\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n");
formatter.write("HTTP/1.1 404 Not Found\nContent-Type: application/json; charset\u003dutf-8\nDate: Mon, 18 Jan 2016 07:07:39 GMT\nContent-Length: 79\n\n{\n  \"code\" : 404,\n  \"message\" : \"No author with id a0c1582b-348d-4bd7-b428-1d497b7a1990\"\n}");
formatter.result({
  "duration": 20409015,
  "status": "passed"
});
formatter.uri("de/leanovate/bookdb/blackbox/books.feature");
formatter.feature({
  "line": 1,
  "name": "Manage books",
  "description": "",
  "id": "manage-books",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2929197,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Add book without author",
  "description": "Given: A running book database",
  "id": "manage-books;add-book-without-author",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "A book with title \"Da Book\" without author is created",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The created book does exists",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "The book has the title \"Da Book\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "The book is deleted",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The book does not exists",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Da Book",
      "offset": 19
    }
  ],
  "location": "BookStepdefs.aBookWithTitleWithoutAuthorIsCreated(String)"
});
formatter.write("POST /v1/books HTTP/1.1\nContent-Length: 69\nContent-Type: application/json; charset\u003dUTF-8\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n\n{\n  \"id\" : null,\n  \"title\" : \"Da Book\",\n  \"summary\" : null,\n  \"isbn\" : null,\n  \"authors\" : [ ]\n}");
formatter.write("HTTP/1.1 201 Created\nLocation: http://localhost:8080/v1/books/a1c04183-0c29-4968-99bc-04288e2d6f8e\nDate: Mon, 18 Jan 2016 07:07:39 GMT\nContent-Length: 0\n\n\u003c\u003c\u003c\u003c empty body \u003e\u003e\u003e\u003e");
formatter.result({
  "duration": 26013456,
  "status": "passed"
});
formatter.match({
  "location": "BookStepdefs.theCreatedBookCanBeOpened()"
});
formatter.write("GET /v1/books/a1c04183-0c29-4968-99bc-04288e2d6f8e HTTP/1.1\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n");
formatter.write("HTTP/1.1 200 OK\nContent-Type: application/json; charset\u003dutf-8\nDate: Mon, 18 Jan 2016 07:07:39 GMT\nContent-Length: 76\n\n{\n  \"id\" : \"a1c04183-0c29-4968-99bc-04288e2d6f8e\",\n  \"title\" : \"Da Book\",\n  \"authors\" : [ ]\n}");
formatter.result({
  "duration": 49092165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Da Book",
      "offset": 24
    }
  ],
  "location": "BookStepdefs.theBookHasTheTitle(String)"
});
formatter.result({
  "duration": 321112,
  "status": "passed"
});
formatter.match({
  "location": "BookStepdefs.theBookIsDeleted()"
});
formatter.write("DELETE /v1/books/a1c04183-0c29-4968-99bc-04288e2d6f8e HTTP/1.1\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n");
formatter.write("HTTP/1.1 204 No Content\nDate: Mon, 18 Jan 2016 07:07:39 GMT\n");
formatter.result({
  "duration": 12593657,
  "status": "passed"
});
formatter.match({
  "location": "BookStepdefs.theBookDoesNotExists()"
});
formatter.write("GET /v1/books/a1c04183-0c29-4968-99bc-04288e2d6f8e HTTP/1.1\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n");
formatter.write("HTTP/1.1 404 Not Found\nContent-Type: application/json; charset\u003dutf-8\nDate: Mon, 18 Jan 2016 07:07:39 GMT\nContent-Length: 77\n\n{\n  \"code\" : 404,\n  \"message\" : \"No book with id a1c04183-0c29-4968-99bc-04288e2d6f8e\"\n}");
formatter.result({
  "duration": 11597476,
  "status": "passed"
});
formatter.uri("de/leanovate/bookdb/blackbox/genres.feature");
formatter.feature({
  "line": 1,
  "name": "Manage genres",
  "description": "",
  "id": "manage-genres",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2205508,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Add and remove genre",
  "description": "Given: A running book database",
  "id": "manage-genres;add-and-remove-genre",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "A genre \"test_genre\" is added",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The genre \"test_genre\" exists",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "The genre \"test_genre\" is deleted",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The genre \"test_genre\" does not exists",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test_genre",
      "offset": 9
    }
  ],
  "location": "GenreStepdefs.a_genre_is_added(String)"
});
formatter.write("POST /v1/genres HTTP/1.1\nContent-Length: 63\nContent-Type: application/json; charset\u003dUTF-8\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n\n{\n  \"name\" : \"test_genre\",\n  \"description\" : \"Description of test_genre\"\n}");
formatter.write("HTTP/1.1 201 Created\nLocation: http://localhost:8080/v1/genres/test_genre\nDate: Mon, 18 Jan 2016 07:07:39 GMT\nContent-Length: 0\n\n\u003c\u003c\u003c\u003c empty body \u003e\u003e\u003e\u003e");
formatter.result({
  "duration": 10998933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test_genre",
      "offset": 11
    }
  ],
  "location": "GenreStepdefs.theGenreExists(String)"
});
formatter.write("GET /v1/genres/test_genre HTTP/1.1\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n");
formatter.write("HTTP/1.1 200 OK\nContent-Type: application/json; charset\u003dutf-8\nDate: Mon, 18 Jan 2016 07:07:39 GMT\nContent-Length: 63\n\n{\n  \"name\" : \"test_genre\",\n  \"description\" : \"Description of test_genre\"\n}");
formatter.result({
  "duration": 6913921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test_genre",
      "offset": 11
    }
  ],
  "location": "GenreStepdefs.theGenreIsDeleted(String)"
});
formatter.write("DELETE /v1/genres/test_genre HTTP/1.1\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n");
formatter.write("HTTP/1.1 204 No Content\nDate: Mon, 18 Jan 2016 07:07:39 GMT\n");
formatter.result({
  "duration": 7523088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test_genre",
      "offset": 11
    }
  ],
  "location": "GenreStepdefs.theGenreDoesNotExists(String)"
});
formatter.write("GET /v1/genres/test_genre HTTP/1.1\nHost: localhost:8080\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.1 (Java/1.8.0_66)\nAccept-Encoding: gzip,deflate\n");
formatter.write("HTTP/1.1 404 Not Found\nContent-Type: application/json; charset\u003dutf-8\nDate: Mon, 18 Jan 2016 07:07:39 GMT\nContent-Length: 54\n\n{\n  \"code\" : 404,\n  \"message\" : \"No genre with name test_genre\"\n}");
formatter.result({
  "duration": 4748271,
  "status": "passed"
});
});