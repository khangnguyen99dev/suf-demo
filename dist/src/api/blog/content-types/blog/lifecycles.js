"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../../../utils/helper");
exports.default = {
    beforeCreate(event) {
        const { data } = event.params;
        if (data.title) {
            data.slug = (0, helper_1.generateSlug)(data.title);
        }
    },
    beforeUpdate(event) {
        const { data } = event.params;
        if (data.title) {
            data.slug = (0, helper_1.generateSlug)(data.title);
        }
    },
};
