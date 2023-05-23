"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const estudiantes_entity_1 = require("./estudiantes.entity");
let EstudianteService = class EstudianteService {
    constructor(estudiantesRepository) {
        this.estudiantesRepository = estudiantesRepository;
    }
    async addEstudiantes(estudiante) {
        let item = new estudiantes_entity_1.EstudiantesEntity();
        item.nombre = estudiante.nombre;
        item.valor = estudiante.valor;
        item.status = estudiante.status;
        const newInfante = await this.estudiantesRepository.save(item);
        return newInfante;
    }
    findAll() {
        return this.estudiantesRepository.find({ where: { status: (0, typeorm_2.Like)(0) } });
    }
    findOne(id) {
        return this.estudiantesRepository.findOneBy({ id });
    }
    async remove(id) {
        await this.estudiantesRepository.delete(id);
    }
};
EstudianteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(estudiantes_entity_1.EstudiantesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EstudianteService);
exports.EstudianteService = EstudianteService;
//# sourceMappingURL=estudiante.service.js.map