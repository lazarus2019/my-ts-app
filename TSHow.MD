# Learn With Typescript

## File Name Convention

- `kebab-case` instead of `camelCase`
- `product-list.tsx` instead of `ProductList.txs`
- `student-api.ts` instead of `studentApi.ts`

## Snippets

- Install extension: Typescript React code snippet

|  Command  | Description                                |
| :-------: | ------------------------------------------ |
| `tsrpfc`  | Tạo typescript skeleton **named export**   |
| `tsdrpfc` | Tạo typescript skeleton **default export** |

## Declare Component

```tsx
function Product() {
  return <div>React Typescript</div>;
}

// Or declare return type value

function Product(): ReactElement {
  return <div>React Typescript</div>;
}
```

## Props

### Props Determined

\- Using interface to determined props for component (By 2 ways)

- Solution 1

```tsx
interface StudentProps {
  age: number;
  name: string;
}

function Student(props: StudentProps) {
  return <div>{props.name}</div>;
}
```

- Solution 2

```tsx
interface StudentProps {
  age: number;
  name: string;
}

function Student({ name }: StudentProps) {
  return <div>{name}</div>;
}
```

### Props Types

\- Using the question mark (?) for optional attribute

```tsx
interface Contact {
  name: string;
  phone: string;
}

interface StudentProps {
  name: string;
  age: number;
  isHero: boolean;
  address?: string;

  hobbyList: string[];
  primaryContact: Contact;
  onClick: () => string;
}
```

### Props Default value

\- Declare default value like javascript (only for optional attributes)

```tsx
interface StudentProps {
  name: string;
  address?: string;
}

function Student({ name, address = "" }: StudentProps) {
  return <div>{name}</div>;
}
```

## Collapse props to a group

\- For easy code easy debug

```tsx
interface Student {
  name: string;
  age: number;
  gender: string;
  address?: string;
}

interface StudentProps {
  student: Student;
}

function Student({ student }: StudentProps) {
  return (
    <div>
      {student.name} {student.address}
    </div>
  );
}
```

## Note: Beware with null/undefined props

\- Checking props before using it

```tsx
interface Student {
  name: string;
  age: number;
  gender: string;
  address?: string;
}

interface StudentProps {
  student?: Student;
}

// Solution 1: use optional chaining
function Student({ student }: StudentProps) {
  return (
    <div>
      {student?.name} {student?.address}
    </div>
  );
}

// Solution 2: check null/undefined first
function Student({ student }: StudentProps) {
  if (!student) return null;

  return (
    <div>
      {student.name} {student.address}
    </div>
  );
}
```
