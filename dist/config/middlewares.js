"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    {
        name: 'strapi::cors',
        config: {
            enabled: true,
            headers: ['*'],
            origin: ['http://localhost:4200'],
        },
    },
];
