module.exports = {
    components: {
        schemas: {
            Task: {
                type: "object",
                properties: {
                    _id: {
                        type: "ObjectId",
                        description: "Task identificaion number",
                        example: "66f86254bd2fadc64a38c155"
                    },
                    title: {
                        type: 'string',
                        description: 'Task name',
                        example: 'Do homework'
                    },
                    completed: {
                        type: 'boolean',
                        description: 'Task has been done',
                        example: "false"
                    }
                }
            },
            _id: {
                type: 'objectId',
                description: 'An id of a task',
                example: '66f86254bd2fadc64a38c155'
            },
            title: {
                type: 'string',
                description: 'Task name',
                example: 'Do homework'
            },

        }

    }
}