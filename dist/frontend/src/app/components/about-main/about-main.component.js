"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutMainComponent = void 0;
const core_1 = require("@angular/core");
const environment_1 = require("../../../environments/environment");
let AboutMainComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-about-main',
            standalone: true,
            imports: [],
            templateUrl: './about-main.component.html',
            styleUrl: './about-main.component.scss'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _dataHomePage_decorators;
    let _dataHomePage_initializers = [];
    let _dataHomePage_extraInitializers = [];
    var AboutMainComponent = _classThis = class {
        constructor() {
            this.dataHomePage = __runInitializers(this, _dataHomePage_initializers, void 0);
            this.environment = (__runInitializers(this, _dataHomePage_extraInitializers), environment_1.environment);
        }
    };
    __setFunctionName(_classThis, "AboutMainComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _dataHomePage_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _dataHomePage_decorators, { kind: "field", name: "dataHomePage", static: false, private: false, access: { has: obj => "dataHomePage" in obj, get: obj => obj.dataHomePage, set: (obj, value) => { obj.dataHomePage = value; } }, metadata: _metadata }, _dataHomePage_initializers, _dataHomePage_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AboutMainComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AboutMainComponent = _classThis;
})();
exports.AboutMainComponent = AboutMainComponent;
