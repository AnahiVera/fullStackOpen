sequenceDiagram
    participant browser
    participant server

    Note right of browser: browser generates the HTML by executing the JS code from server
   browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: request contains the new note as JSON data containing both the content of the note and the timestamp (Header : Content Type , application.Json)
    
    
    Note left of server: The server responds with status code 201 created
    server-->>browser: HTML DOCUMENT
    
    deactivate server

    Note left of server: Server message in console {"message":"note created"}
    Note right of browser: browser generates the HTML by executing the JS code from server