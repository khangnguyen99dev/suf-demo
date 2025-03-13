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
exports.ScriptService = void 0;
const core_1 = require("@angular/core");
let ScriptService = (() => {
    let _classDecorators = [(0, core_1.Injectable)({
            providedIn: 'root'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ScriptService = _classThis = class {
        constructor() {
            this.scripts = {};
            this.scripts = {
                jquery: { src: 'assets/js/jquery.min.js', loaded: false },
                bootstrap: { src: 'assets/js/bootstrap.bundle.min.js', loaded: false },
                waypoints: { src: 'assets/js/waypoints.js', loaded: false },
                appear: { src: 'assets/js/appear.min.js', loaded: false },
                odometer: { src: 'assets/js/odometer.min.js', loaded: false },
                niceSelect: { src: 'assets/js/jquery.nice-select.min.js', loaded: false },
                swiper: { src: 'assets/js/swiper-bundle.js', loaded: false },
                imagesloaded: { src: 'assets/js/imagesloaded-pkgd.js', loaded: false },
                magnificPopup: { src: 'assets/js/magnific-popup.js', loaded: false },
                isotope: { src: 'assets/js/isotope.pkgd.min.js', loaded: false },
                meanmenu: { src: 'assets/js/meanmenu.js', loaded: false },
                wow: { src: 'assets/js/wow.js', loaded: false },
                beforeafter: { src: 'assets/js/beforeafter.jquery-1.0.0.min.js', loaded: false },
                main: { src: 'assets/js/main.js', loaded: false }
            };
        }
        load(...scripts) {
            const promises = [];
            scripts.forEach((script) => promises.push(this.loadScript(script)));
            return Promise.all(promises);
        }
        loadScript(name) {
            return new Promise((resolve, reject) => {
                if (this.scripts[name].loaded) {
                    resolve({ script: name, loaded: true, status: 'Already Loaded' });
                }
                else {
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = this.scripts[name].src;
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                    script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                    document.getElementsByTagName('head')[0].appendChild(script);
                }
            });
        }
    };
    __setFunctionName(_classThis, "ScriptService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ScriptService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ScriptService = _classThis;
})();
exports.ScriptService = ScriptService;
