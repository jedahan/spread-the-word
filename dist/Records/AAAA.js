"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Record_1 = require("./Record");
class AAAA extends Record_1.default {
    constructor({ name, data, ttl }) {
        super("AAAA");
        this.name = name;
        this.data = data;
        this.ttl = typeof ttl === "number" ? ttl : 120;
    }
}
exports.default = AAAA;
