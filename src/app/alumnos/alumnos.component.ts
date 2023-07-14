import { Component } from '@angular/core';
import { Alumno } from '../models';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  public alumnos: Alumno[] = [
    new Alumno(1, 'Sheldon', 'Cooper', 'sheldon@mail.com', 24, true, new Date('1999-01-03'),'Angular'),
    new Alumno(3, 'Leonard', 'Hofstadter', 'leonard@mail.com', 24, false, new Date('1999-04-14'),'JavaScript'),
    new Alumno(4, 'Penny', 'Hofstadter', 'penny@mail.com', 22, false, new Date('2001-01-24'),'Desarrollo web'),
    new Alumno(5, 'Rajesh', 'Koothrappali', 'rajesh@mail.com', 27, true, new Date('1996-02-12'),'Angular'),
    new Alumno(6, 'Howard', 'Wolowitz', 'howard@mail.com', 25, true, new Date('1996-03-24'),'Desarrollo web'),
  ];
}
