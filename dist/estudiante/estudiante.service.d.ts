import { Repository } from 'typeorm';
import { EstudianteDto } from './estudiante.interface';
import { EstudiantesEntity } from './estudiantes.entity';
export declare class EstudianteService {
    private estudiantesRepository;
    constructor(estudiantesRepository: Repository<EstudiantesEntity>);
    addEstudiantes(estudiante: EstudianteDto): Promise<any>;
    findAll(): Promise<EstudiantesEntity[]>;
    findOne(id: number): Promise<EstudiantesEntity>;
    remove(id: string): Promise<void>;
}
