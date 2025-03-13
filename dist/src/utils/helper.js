"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlug = void 0;
function generateSlug(title) {
    return title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}
exports.generateSlug = generateSlug;
