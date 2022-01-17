import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "genresId",
})
export class GenresPipe implements PipeTransform {
  transform(value: any) {
    switch (value) {
      case 28:
        value = "Action";
        break;
      case 12:
        value = "Adventure";
        break;
      case 16:
        value = "Animation";
        break;
      case 35:
        value = "Comedy";
        break;
      case 80:
        value = "Crime";
        break;
      case 99:
        value = "Documentary";
        break;
      case 18:
        value = "Drama";
        break;
      case 10751:
        value = "Family";
        break;
      case 14:
        value = "Fantasy";
        break;
      case 36:
        value = "History";
        break;
      case 27:
        value = "Horror";
        break;
      case 10402:
        value = "Music";
        break;
      case 9648:
        value = "Mystery";
        break;
      case 10749:
        value = "Romance";
        break;
      case 878:
        value = "Science Fiction";
        break;
      case 10770:
        value = "TV Movie";
        break;
      case 53:
        value = "Thriller";
        break;
      case 10752:
        value = "War";
        break;
      case 37:
        value = "Western";
        break;

    }
    return value;
  }
}
