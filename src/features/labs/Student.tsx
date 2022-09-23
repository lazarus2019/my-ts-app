export interface StudentProps {
  name?: string;
  age: number;
  isHero?: boolean;
}

export function Student({ name = "Kevin", isHero = false }: StudentProps) {
  return (
    <div>
      {name} {isHero ? "hero" : "no-hero"}
    </div>
  );
}
