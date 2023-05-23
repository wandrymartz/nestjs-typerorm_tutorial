
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EstudianteDto } from './estudiante.interface';
import { EstudianteService } from './estudiante.service';
import { EstudiantesEntity } from './estudiantes.entity';

@Controller('estudiantes')
export class EstudianteController { 
    constructor(private readonly estudiantesServices: EstudianteService) { }

  
    @Get()
    async findAll(estudiante: EstudianteDto): Promise<any> {
      const response = await this.estudiantesServices.findAll();
      console.log(response[0].nombre)
      return {response};
    }

    @Post()
    async AddInfantePsicomotor(@Body() estudiante: EstudianteDto): Promise<EstudiantesEntity>{
      const res = await this.estudiantesServices.addEstudiantes(estudiante);
      console.log(res);
      return await this.estudiantesServices.addEstudiantes(estudiante);
    }

    @Delete(':id')
    async delete(@Param() params) {
      return this.estudiantesServices.remove(params.id);
    }


}
