export class Alumno {
    constructor(
      public id: number,
      public Nombre: string,
      public Apellido: string,
      public email: string,
      public edad: number,
      public Top10: boolean,
      public cumpleanios: Date,
      public curso: string,
    ) {}
  }
  