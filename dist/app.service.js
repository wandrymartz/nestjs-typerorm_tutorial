"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const PDFDocument = require('pdfkit-table');
let AppService = class AppService {
    async generarPDF() {
        const pdfBuffer = await new Promise(resolve => {
            const doc = new PDFDocument({
                size: "LETTER",
                bufferPages: true,
                autoFirstPage: false,
            });
            let pageNumber = 0;
            doc.on('pageAdded', () => {
                pageNumber++;
                if (pageNumber > 1) {
                    doc.image((0, path_1.join)(process.cwd(), "uploads/logoCanal.png"), doc.page.width - 100, 5, { fit: [45, 45], align: 'center' });
                    doc.moveTo(50, 55)
                        .lineTo(doc.page.width - 50, 55)
                        .stroke();
                }
                let bottom = doc.page.margins.bottom;
                doc.page.margins.bottom = 0;
                doc.font("Helvetica");
                doc.fontSize(14);
                doc.text('Pag. ' + pageNumber, (doc.page.width - 100) * 0.5, doc.page.height - 50, {
                    width: 100,
                    align: 'center',
                    lineBreak: false,
                });
                doc.page.margins.bottom = bottom;
            });
            doc.addPage();
            doc.image((0, path_1.join)(process.cwd(), "uploads/logoCanal.png"), doc.page.width / 2 - 100, 150, { width: 200, });
            doc.text('', 0, 400);
            doc.font("Helvetica-Bold").fontSize(24);
            doc.text("DEV Latino", {
                width: doc.page.width,
                align: 'center'
            });
            doc.addPage();
            doc.text("", 50, 70);
            doc.font("Helvetica-Bold").fontSize(24);
            doc.text("PDF Generado en nuestro servidor");
            doc.moveDown();
            doc.font("Helvetica");
            doc.fontSize(16);
            doc.text("Esto es un ejemplo de como generar un pdf en nuestro servidor nestjs");
            doc.addPage();
            doc.text("", 50, 70);
            const table = {
                title: "Tabla ejemplo",
                subtitle: "Esta es una tabla de ejemplo",
                headers: ["id", "nombre"],
                rows: [["1", "Dev latino"], ["2", "Programadores fumados"]]
            };
            doc.table(table, { columnsSize: [150, 300] });
            const buffer = [];
            doc.on('data', buffer.push.bind(buffer));
            doc.on('end', () => {
                const data = Buffer.concat(buffer);
                resolve(data);
            });
            doc.end();
        });
        return pdfBuffer;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map