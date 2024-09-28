

module.exports = {
    paths: {
        "/create": {
            post: {
                tags: {
                    Tasks: "Create a task",
                },
                description: "Create Task",
                operationId: "createUser",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            }
                        }
                    }
                },
                response: {
                    200: {
                        description: "Task created successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            }
        },
        //- GET /: Endpoint para traer todas las tareas.
        "/": {
            get: {
                tags: {
                    Task: "Fetching all taks",
                },
                description: "Fetching Tasks",
                operationId: "fetchingTask",
                parameters: [],
                requestBody: {},
                responses: {
                    200: {
                        description: "All tasks"
                    },
                    500: {
                        description: "Server error",
                    }
                }
            }
        },
        //- PUT /id/:_id: Endpoint para actualizar una tarea y que solo se pueda cambiar el título de la tarea. Es decir, que no me deje cambiar el campo  “completed” desde este endpoint, sino solo, el título.
        "/id/{_id}": {
            put: {
                tags: {
                    Task: "Update a task",
                },
                description: "Update a task",
                operationId: "updateTask",
                parameters: [{
                    name:"_id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/_id"
                    },
                    description: 'ID of task to be updated',
                },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task" }
                        },
                    }
                },
                responses : {
                    200:{description : "Task updated successfully"},
                    500:{description : "Server error"}
                }
            },
            delete:{
                tags:{
                    Task:"Delete a task"
                },
                description: "Delete a task",
                operationId : 'DeleteTask',
                parameters :[{
                    name: "_id",
                    in:"path",
                    schema:{
                        $ref:"#/components/schemas/_id"
                    },
                    description : "ID of a task to be deleted",
                },
            ],requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task" }
                        },
                    }
                },
                responses : {
                    200:{description : "Task deleted successfully"},
                    500:{description : "Server error"}
                }
            }
        },
        
    },
};