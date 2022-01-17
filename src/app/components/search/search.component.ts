import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Output() filtered = new EventEmitter<any>();
  @Input() items = [];
  @Input() backupItems = [];

  genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  activeGenres = [];
  searchTerm = "";
  sortBy = "Unsorted";
  constructor() {}

  ngOnInit(): void {}

  toggleGenre(genre) {
    genre.active = !genre.active;
    if (genre.active) {
      this.activeGenres.push(genre.id);
    } else {
      this.activeGenres = this.activeGenres.filter((value, index, arr) => {
        return value != genre.id;
      });
    }
    this.filter();
  }

  filter() {
    let searchword = this.searchTerm;
    this.items = this.backupItems;
    
    if(this.sortBy == "Name") this.items.sort((a, b) => (a.original_title > b.original_title) ? 1 : -1)
    if(this.sortBy == "Best Rating") this.items.sort((a, b) => (a.vote_average < b.vote_average) ? 1 : -1)
    if(this.sortBy == "Worst Rating") this.items.sort((a, b) => (a.vote_average > b.vote_average) ? 1 : -1)


    if (searchword != "") {
      this.items = this.items.filter((current: any) => {
        if (current.original_title && searchword) {
          if (
            current.original_title
              .toLowerCase()
              .indexOf(searchword.toLowerCase()) > -1
          )
            return true;
        }
        return false;
      });
    }

    if (this.activeGenres.length > 0) {
      this.items = this.items.filter((current: any) => {
        if (this.activeGenres.includes(current.genre_ids[0])) return true;
        return false;
      });
    }


    

    this.filtered.emit(this.items);
  }
}
