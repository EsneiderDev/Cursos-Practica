import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pais } from '../models/pais-interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private apiBaseUrl = 'https://api.restcountries.com/countries/v5';
  private authToken = 'rc_live_b93be68b1cca46c6a7e8924d49f44486';

  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  // En el navegador usamos el proxy (/api) para evitar el error 403 de CORS/Origin.
  // En el servidor (SSR) llamamos directo a la API: al no haber navegador no se
  // envía el header Origin, así que la API lo acepta.
  private get baseUrl(): string {
    return isPlatformBrowser(this.platformId) ? '/api/v5' : this.apiBaseUrl;
  }

  private get httpHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.authToken}`,
    });
  }

  obtenerPaises(busqueda?: string): Observable<Pais[]> {
    const params = busqueda ? `?q=${busqueda}` : '?q=stan&limit=5&pretty=1';
    const url = `${this.baseUrl}${params}`;

    return this.http
      .get<{ data: { objects: Pais[] } }>(url, { headers: this.httpHeaders })
      .pipe(map((response) => response.data.objects));
  }
}
