import { Component, OnInit } from "@angular/core";
import { MoviesService } from "./services/movies.service";
import { movies } from "./components/movies";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Popcorn 2.0";
  
  movies = [];
  backupMovies = [];
  loading = true;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.moviesService.getContent(1).subscribe(
      (page1: any) => {
        this.moviesService.getContent(2).subscribe((page2: any) => {
          this.moviesService.getContent(3).subscribe((page3: any) => {
            setTimeout(() => {
              this.movies = page1.results.concat(page2.results, page3.results);
              this.backupMovies = this.movies;
              this.loading = false;
            }, 500);
          });
        });
      },
      (error) => {
        alert("Error fetching data from API. Local data will be loaded")
        setTimeout(() => {
          this.movies = movies
          this.backupMovies = this.movies;
          this.loading = false;
        }, 500);

      }
    );
  }
}
