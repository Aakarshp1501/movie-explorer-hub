import { useState, useMemo } from "react";
import { Search, Film, SlidersHorizontal, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MovieCard from "@/components/MovieCard";
import { movies, genres, type Genre } from "@/data/movies";

export default function Index() {
  const [search, setSearch] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("rating");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const toggleGenre = (genre: Genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const filtered = useMemo(() => {
    let result = movies.filter((m) => {
      const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase()) ||
        m.director.toLowerCase().includes(search.toLowerCase());
      const matchesGenre = selectedGenres.length === 0 || m.genre.some((g) => selectedGenres.includes(g));
      const matchesRating = m.rating >= minRating;
      const matchesCategory = categoryFilter === "all" || m.category === categoryFilter;
      return matchesSearch && matchesGenre && matchesRating && matchesCategory;
    });

    result.sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "year") return b.year - a.year;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "votes") return b.votes - a.votes;
      return 0;
    });

    return result;
  }, [search, selectedGenres, minRating, sortBy, categoryFilter]);

  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 glass sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <Film className="w-7 h-7 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Movie Recommendation System</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Search & Sort Row */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search movies or directors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-card border-border/60 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-44 bg-card border-border/60">
              <SlidersHorizontal className="w-4 h-4 mr-2 text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Top Rated</SelectItem>
              <SelectItem value="year">Newest First</SelectItem>
              <SelectItem value="title">A – Z</SelectItem>
              <SelectItem value="votes">Most Popular</SelectItem>
            </SelectContent>
          </Select>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-40 bg-card border-border/60">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Hit">Hit</SelectItem>
              <SelectItem value="Average">Average</SelectItem>
              <SelectItem value="Flop">Flop</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Genre Chips */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">Filter by Genre</p>
          <div className="flex flex-wrap gap-2">
            {genres.map((g) => (
              <Badge
                key={g}
                variant={selectedGenres.includes(g) ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedGenres.includes(g)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
                onClick={() => toggleGenre(g)}
              >
                {g}
              </Badge>
            ))}
          </div>
        </div>

        {/* Rating Slider */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[hsl(var(--star))]" />
            <p className="text-sm font-medium text-muted-foreground">
              Minimum Rating: <span className="text-foreground font-semibold">{minRating.toFixed(1)}</span>
            </p>
          </div>
          <Slider
            value={[minRating]}
            onValueChange={([v]) => setMinRating(v)}
            min={0}
            max={10}
            step={0.5}
            className="max-w-md"
          />
        </div>

        {/* Results */}
        <p className="text-sm text-muted-foreground">{filtered.length} movies found</p>

        {filtered.length === 0 ? (
          <div className="text-center py-20 space-y-2">
            <Film className="w-12 h-12 mx-auto text-muted-foreground/40" />
            <p className="text-muted-foreground">No movies match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
