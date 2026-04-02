import { Star } from "lucide-react";
import type { Movie } from "@/data/movies";
import { Badge } from "@/components/ui/badge";

const genreColorMap: Record<string, string> = {
  Action: "bg-[hsl(var(--genre-action))]/20 text-[hsl(var(--genre-action))] border-[hsl(var(--genre-action))]/30",
  Comedy: "bg-[hsl(var(--genre-comedy))]/20 text-[hsl(var(--genre-comedy))] border-[hsl(var(--genre-comedy))]/30",
  Drama: "bg-[hsl(var(--genre-drama))]/20 text-[hsl(var(--genre-drama))] border-[hsl(var(--genre-drama))]/30",
  Horror: "bg-[hsl(var(--genre-horror))]/20 text-[hsl(var(--genre-horror))] border-[hsl(var(--genre-horror))]/30",
  "Sci-Fi": "bg-[hsl(var(--genre-scifi))]/20 text-[hsl(var(--genre-scifi))] border-[hsl(var(--genre-scifi))]/30",
  Romance: "bg-[hsl(var(--genre-romance))]/20 text-[hsl(var(--genre-romance))] border-[hsl(var(--genre-romance))]/30",
  Thriller: "bg-[hsl(var(--genre-thriller))]/20 text-[hsl(var(--genre-thriller))] border-[hsl(var(--genre-thriller))]/30",
  Animation: "bg-[hsl(var(--genre-animation))]/20 text-[hsl(var(--genre-animation))] border-[hsl(var(--genre-animation))]/30",
};

const categoryStyles: Record<string, string> = {
  Hit: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Average: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Flop: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="glass rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
      <div className="h-44 bg-muted flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
        {movie.poster}
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground leading-tight">{movie.title}</h3>
          <Badge variant="outline" className={`shrink-0 text-xs ${categoryStyles[movie.category]}`}>
            {movie.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{movie.director} · {movie.year}</p>
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 fill-[hsl(var(--star))] text-[hsl(var(--star))]" />
          <span className="font-medium text-foreground">{movie.rating}</span>
          <span className="text-xs text-muted-foreground">({(movie.votes / 1000).toFixed(0)}k)</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {movie.genre.map((g) => (
            <span key={g} className={`text-xs px-2 py-0.5 rounded-full border ${genreColorMap[g]}`}>
              {g}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
