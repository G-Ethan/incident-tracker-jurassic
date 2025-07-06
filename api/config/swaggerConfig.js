export const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Jurassic-Park API",
            version: "1.0.0",
            description: "REST API for jurassic park Incident",
        },
        servers: [
            {
                url: "http://127.0.0.1:3000",
            },
        ],
        components: {
            schemas: {
                Incidents: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        title: { type: "string", example: "Hollogramme HS" },
                        description: { type: "string", example: "description...." },
                        type: { type: "string", example: "Panne" },
                        zoneId: { type: "integer", example: 1 },
                        emergencyLevel: { type: "string", example: "moyenne" },
                        status: { type: "boolean", example: true},
                    },
                },
                Incident: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        title: { type: "string", example: "Hollogramme HS" },
                        description: { type: "string", example: "description...." },
                        type: { type: "string", example: "Panne" },
                        zoneId: { type: "integer", example: 1 },
                        zone: {
                            type: "object",
                            properties: {
                                id: {type: "integer", example: 1},
                                name: {type: "string", example: "T-Rex valley"},
                            },
                        },
                        emergencyLevel: { type: "string", example: "moyenne" },
                        status: { type: "boolean", example: true},
                    },
                },
                IncidentInput: {
                    type: "object",
                    required: [
                        "title",
                        "description",
                        "type",
                        "zoneId",
                        "emergencyLevel",
                        "status",
                    ],
                    properties: {
                        title: { type: "string", example: "Hollogramme HS" },
                        description: { type: "string", example: "description...." },
                        type: { type: "string", example: "Panne" },
                        zoneId: { type: "integer", example: 1 },
                        emergencyLevel: { type: "string", example: "moyenne" },
                        status: { type: "boolean", example: true},
                    },
                },
                IncidentModification: {
                    type: "object",
                    required: [],
                    properties: {
                        title: { type: "string", example: "Hollogramme HS" },
                        description: { type: "string", example: "description...." },
                        type: { type: "string", example: "Panne" },
                        zoneId: { type: "integer", example: 1 },
                        emergencyLevel: { type: "string", example: "moyenne" },
                        status: { type: "boolean", example: true},
                    },
                },
                Zone: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        name: { type: "string", example: "T-Rex valley" },
                    },
                },
                ZoneInput: {
                    type: "object",
                    required: ["name"],
                    properties: {
                        name: { type: "string", example: "T-Rex valley" },
                    },
                },
                Message: {
                    type: "object",
                    properties: {
                        message: {type: "string", example: "L'incident a été modifier avec succès"}
                    }
                }
            },
        },
    },
    apis: ["./routes/*.js"],
};