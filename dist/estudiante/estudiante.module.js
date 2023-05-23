"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteModule = void 0;
const estudiante_service_1 = require("./estudiante.service");
const estudiante_controller_1 = require("./estudiante.controller");
const common_1 = require("@nestjs/common");
const estudiantes_entity_1 = require("./estudiantes.entity");
const typeorm_1 = require("@nestjs/typeorm");
let EstudianteModule = class EstudianteModule {
};
EstudianteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([estudiantes_entity_1.EstudiantesEntity])],
        controllers: [
            estudiante_controller_1.EstudianteController,
        ],
        providers: [
            estudiante_service_1.EstudianteService,
        ],
    })
], EstudianteModule);
exports.EstudianteModule = EstudianteModule;
//# sourceMappingURL=estudiante.module.js.map