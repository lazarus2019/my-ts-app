import { IStudent } from "@/models";

export interface StudentProps {
  student: IStudent;
  onClick: (student: IStudent) => void;
}

export function Student({ student, onClick }: StudentProps) {
  const { name, isHero } = student;
  return (
    <div onClick={() => onClick?.(student)}>
      Student: {name} {isHero ? "hero" : "no-hero"}
    </div>
  );
}
