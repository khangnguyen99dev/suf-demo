"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: 'GET',
            path: '/get-home-page',
            handler: 'get-home-page.getHomePage',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
