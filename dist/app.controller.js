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
exports.AppController = exports.storage = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const app_service_1 = require("./app.service");
const multer_1 = require("multer");
const path = require("path");
const rxjs_1 = require("rxjs");
const path_1 = require("path");
exports.storage = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads/',
        filename: (req, file, cb) => {
            const filename = path.parse(file.originalname).name.replace(/\s/g, '');
            const extension = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`);
        }
    })
};
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    downloadFile(filename, res) {
        return (0, rxjs_1.of)(res.sendFile((0, path_1.join)(process.cwd(), 'uploads/' + filename)));
    }
    async UploadMultiplesFiles(files, Body) {
        console.log(Body.adicionals);
        return { response: true };
    }
    async downloadPDF(res) {
        const buffer = await this.appService.generarPDF();
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename=example.pdf',
            'Content-Length': buffer.length,
        });
        res.end(buffer);
    }
};
__decorate([
    (0, common_1.Get)('uploadFiles/:filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "downloadFile", null);
__decorate([
    (0, common_1.Post)("uploadFiles"),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)(exports.storage)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "UploadMultiplesFiles", null);
__decorate([
    (0, common_1.Get)("pdf/download"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "downloadPDF", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map