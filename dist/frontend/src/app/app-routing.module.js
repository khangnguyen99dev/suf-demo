"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/home/home.module'))).then(m => m.HomeModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: 'services',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/service/service.module'))).then(m => m.ServiceModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: 'service-details',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/service-detail/service-detail.module'))).then(m => m.ServiceDetailModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: 'portfolio',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/portfolio/portfolio.module'))).then(m => m.PortfolioModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: 'portfolio-details',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/portfolio-detail/portfolio-detail.module'))).then(m => m.PortfolioDetailModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: 'about',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/about/about.module'))).then(m => m.AboutModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: 'teams',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/team/team.module'))).then(m => m.TeamModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: 'team-detail/:slug',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/team-detail/team-detail.module'))).then(m => m.TeamDetailModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: 'blog-grid',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/blog-grid/blog-grid.module'))).then(m => m.BlogGridModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: 'blog-stander',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/blog-stander/blog-stander.module'))).then(m => m.BlogStanderModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: 'blog-details',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/blog-detail/blog-detail.module'))).then(m => m.BlogDetailModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: 'contact',
        loadChildren: () => Promise.resolve().then(() => __importStar(require('./pages/contact/contact.module'))).then(m => m.ContactModule),
        data: {
            layout: 'app',
        }
    },
    {
        path: '**',
        redirectTo: '',
    }
];
let AppRoutingModule = (() => {
    let _classDecorators = [(0, core_1.NgModule)({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppRoutingModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AppRoutingModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppRoutingModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppRoutingModule = _classThis;
})();
exports.AppRoutingModule = AppRoutingModule;
