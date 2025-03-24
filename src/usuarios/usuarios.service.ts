import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from './usuario.schema';

@Injectable()
export class UsuariosService {
    constructor(@InjectModel(Usuario.name) private usuarioModel: Model<Usuario>) {}

  async crearUsuario(nombre: string, email: string, edad: number): Promise<Usuario> {
    const nuevoUsuario = new this.usuarioModel({ nombre, email, edad });
    return nuevoUsuario.save();
  }

  async obtenerUsuarios(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }
}
