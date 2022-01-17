import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  @Input() movies = [];
  @Input() loading = false;

  constructor() {}

  ngOnInit(): void {}
}
