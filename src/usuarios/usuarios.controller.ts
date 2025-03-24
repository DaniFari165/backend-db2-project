import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.schema';

@Controller('usuarios')
export class UsuariosController {
    
    constructor(private readonly usuariosService: UsuariosService) {}

    @Post()
    async crearUsuario(
        @Body('nombre') nombre: string,
        @Body('email') email: string,
        @Body('edad') edad: number,
    ): Promise<Usuario> {
        return this.usuariosService.crearUsuario(nombre, email, edad);
    }

    @Get()
    async obtenerUsuarios(): Promise<Usuario[]> {
        return this.usuariosService.obtenerUsuarios();
  }
}
