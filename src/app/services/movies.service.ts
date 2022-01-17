import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getContent(page) {
    return this.http.get(
      "https://api.themoviedb.org/3/discover/movie/?api_key=5b21f5db12e9c972352a5c976d4b1421"+"&page="+page
    );
  }
}
