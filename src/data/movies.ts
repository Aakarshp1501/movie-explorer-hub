export type Genre = "Action" | "Comedy" | "Drama" | "Horror" | "Sci-Fi" | "Romance" | "Thriller" | "Animation";

export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: Genre[];
  rating: number;
  votes: number;
  director: string;
  poster: string;
  category: "Hit" | "Average" | "Flop";
}

export const genres: Genre[] = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance", "Thriller", "Animation"];

export const movies: Movie[] = [
  { id: 1, title: "The Dark Knight", year: 2008, genre: ["Action", "Drama", "Thriller"], rating: 9.0, votes: 2500000, director: "Christopher Nolan", poster: "🦇", category: "Hit" },
  { id: 2, title: "Inception", year: 2010, genre: ["Action", "Sci-Fi", "Thriller"], rating: 8.8, votes: 2200000, director: "Christopher Nolan", poster: "🌀", category: "Hit" },
  { id: 3, title: "Interstellar", year: 2014, genre: ["Drama", "Sci-Fi"], rating: 8.7, votes: 1800000, director: "Christopher Nolan", poster: "🚀", category: "Hit" },
  { id: 4, title: "The Shawshank Redemption", year: 1994, genre: ["Drama"], rating: 9.3, votes: 2600000, director: "Frank Darabont", poster: "⛓️", category: "Hit" },
  { id: 5, title: "Pulp Fiction", year: 1994, genre: ["Drama", "Thriller"], rating: 8.9, votes: 2000000, director: "Quentin Tarantino", poster: "💼", category: "Hit" },
  { id: 6, title: "The Hangover", year: 2009, genre: ["Comedy"], rating: 7.7, votes: 750000, director: "Todd Phillips", poster: "🍻", category: "Average" },
  { id: 7, title: "Superbad", year: 2007, genre: ["Comedy"], rating: 7.6, votes: 550000, director: "Greg Mottola", poster: "🎉", category: "Average" },
  { id: 8, title: "Get Out", year: 2017, genre: ["Horror", "Thriller"], rating: 7.7, votes: 600000, director: "Jordan Peele", poster: "👁️", category: "Average" },
  { id: 9, title: "The Conjuring", year: 2013, genre: ["Horror"], rating: 7.5, votes: 500000, director: "James Wan", poster: "👻", category: "Average" },
  { id: 10, title: "Spirited Away", year: 2001, genre: ["Animation", "Drama"], rating: 8.6, votes: 780000, director: "Hayao Miyazaki", poster: "🐉", category: "Hit" },
  { id: 11, title: "Toy Story", year: 1995, genre: ["Animation", "Comedy"], rating: 8.3, votes: 950000, director: "John Lasseter", poster: "🤠", category: "Hit" },
  { id: 12, title: "The Notebook", year: 2004, genre: ["Romance", "Drama"], rating: 7.8, votes: 520000, director: "Nick Cassavetes", poster: "💕", category: "Average" },
  { id: 13, title: "Titanic", year: 1997, genre: ["Romance", "Drama"], rating: 7.9, votes: 1200000, director: "James Cameron", poster: "🚢", category: "Average" },
  { id: 14, title: "Mad Max: Fury Road", year: 2015, genre: ["Action", "Sci-Fi"], rating: 8.1, votes: 1000000, director: "George Miller", poster: "🔥", category: "Hit" },
  { id: 15, title: "John Wick", year: 2014, genre: ["Action", "Thriller"], rating: 7.4, votes: 600000, director: "Chad Stahelski", poster: "🔫", category: "Average" },
  { id: 16, title: "The Room", year: 2003, genre: ["Drama"], rating: 3.6, votes: 95000, director: "Tommy Wiseau", poster: "🥀", category: "Flop" },
  { id: 17, title: "Cats", year: 2019, genre: ["Comedy"], rating: 2.8, votes: 70000, director: "Tom Hooper", poster: "🐱", category: "Flop" },
  { id: 18, title: "Blade Runner 2049", year: 2017, genre: ["Sci-Fi", "Drama", "Thriller"], rating: 8.0, votes: 550000, director: "Denis Villeneuve", poster: "🌃", category: "Hit" },
  { id: 19, title: "Parasite", year: 2019, genre: ["Drama", "Thriller"], rating: 8.5, votes: 800000, director: "Bong Joon-ho", poster: "🪨", category: "Hit" },
  { id: 20, title: "WALL·E", year: 2008, genre: ["Animation", "Sci-Fi", "Romance"], rating: 8.4, votes: 1100000, director: "Andrew Stanton", poster: "🤖", category: "Hit" },
];
