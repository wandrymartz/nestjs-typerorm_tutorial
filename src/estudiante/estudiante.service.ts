/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, MoreThan, Repository } from 'typeorm';
import { EstudianteDto } from './estudiante.interface';
import { EstudiantesEntity } from './estudiantes.entity';

@Injectable()
export class EstudianteService {

    constructor(
        @InjectRepository(EstudiantesEntity)
        private estudiantesRepository: Repository<EstudiantesEntity>,
      ) {}
    
      async addEstudiantes(estudiante: EstudianteDto): Promise<any> {
        let item = new EstudiantesEntity();
        item.nombre = estudiante.nombre;
        item.valor = estudiante.valor;
        item.status = estudiante.status;
        const newInfante = await this.estudiantesRepository.save(item);
        return newInfante;
    }

      findAll(): Promise<EstudiantesEntity[]> {
        return this.estudiantesRepository.find({where: {status: Like(0) }});
      }
    
      findOne(id: number): Promise<EstudiantesEntity> {
        return this.estudiantesRepository.findOneBy({ id });
      }
    
      async remove(id: string): Promise<void> {
        await this.estudiantesRepository.delete(id);
      }

}
