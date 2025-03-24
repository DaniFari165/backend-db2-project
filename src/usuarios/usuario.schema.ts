import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Usuario extends Document {
    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop()
    edad: number;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
