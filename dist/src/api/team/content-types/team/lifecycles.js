"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../../../utils/helper");
exports.default = {
    beforeCreate(event) {
        const { data } = event.params;
        if (data.name) {
            data.slug = (0, helper_1.generateSlug)(data.name);
        }
    },
    beforeUpdate(event) {
        const { data } = event.params;
        if (data.name) {
            data.slug = (0, helper_1.generateSlug)(data.name);
        }
    },
};
