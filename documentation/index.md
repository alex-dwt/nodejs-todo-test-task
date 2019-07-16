# Group API


## Get list [GET /tasks]

+ Request (application/json)
            
+ Response 200 (application/json)
    + Attributes
        + items (array[Task])


## Get one [GET /tasks/{task_id}]

+ Parameters 
    + task_id: `123e4567-e89b-12d3-a456-426655440000` (string)

+ Request (application/json)
            
+ Response 200 (application/json)
    + Attributes (Task)

+ Response 404 (application/json)


## Complete task [PUT /tasks/{task_id}/complete]

+ Parameters 
    + task_id: `123e4567-e89b-12d3-a456-426655440000` (string)

+ Request (application/json)
            
+ Response 200 (application/json)
    + Attributes (Task)

+ Response 404 (application/json)


## Create task [POST /tasks]

+ Request (application/json)
    + Attributes
        + label: `Go shopping` (string)
            
+ Response 201 (application/json)
    + Attributes (Task)


## Update task [PUT /tasks/{task_id}]

+ Parameters 
    + task_id: `123e4567-e89b-12d3-a456-426655440000` (string)

+ Request (application/json)
    + Attributes
        + label: `Go shopping` (string)
            
+ Response 200 (application/json)
    + Attributes (Task)


## Remove task [DELETE /tasks/{task_id}]

+ Parameters 
    + task_id: `123e4567-e89b-12d3-a456-426655440000` (string)

+ Response 204 (application/json)


# Data Structures

## Task (object)
+ id: `123e4567-e89b-12d3-a456-426655440000` (string)
+ label: `Do test task` (string)
+ isCompleted: true (boolean)
+ createdAt: `2011-12-19T15:28:46.493Z`  (string)