import { IStudent } from "@/models";

export interface StudentProps {
  student: IStudent;
}

export function Student({ student }: StudentProps) {
  const { name, isHero } = student;
  return (
    <div>
      Student: {name} {isHero ? "hero" : "no-hero"}
    </div>
  );
}
