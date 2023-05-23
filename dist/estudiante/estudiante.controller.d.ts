import { EstudianteDto } from './estudiante.interface';
import { EstudianteService } from './estudiante.service';
import { EstudiantesEntity } from './estudiantes.entity';
export declare class EstudianteController {
    private readonly estudiantesServices;
    constructor(estudiantesServices: EstudianteService);
    findAll(estudiante: EstudianteDto): Promise<any>;
    AddInfantePsicomotor(estudiante: EstudianteDto): Promise<EstudiantesEntity>;
    delete(params: any): Promise<void>;
}
