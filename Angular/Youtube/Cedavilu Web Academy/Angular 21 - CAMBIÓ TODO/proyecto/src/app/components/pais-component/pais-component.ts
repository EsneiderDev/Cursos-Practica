import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesService } from '../../services/paises-service';

@Component({
  selector: 'app-pais-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './pais-component.html',
  styleUrl: './pais-component.css',
})
export class PaisComponent {
  paises = signal<any[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private paisService: PaisesService) {
    this.cargarPaises();
  }

  cargarPaises(): void {
    this.cargando.set(true);
    this.error.set(null);

    this.paisService.obtenerPaises().subscribe({
      next: (data) => {
        this.paises.set(data);
        this.cargando.set(false);
      },
      error: (error) => {
        console.error('Error al cargar países:', error);
        this.error.set('Error al cargar países');
        this.cargando.set(false);
      },
    });
  }

  guardarComoJSON(datos: any): void {
    console.log(datos);
    if (datos.length === 0) {
      alert('No hay datos para guardar');
      return;
    }

    const json = JSON.stringify(datos, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `paises-${new Date().getTime()}.json`;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
