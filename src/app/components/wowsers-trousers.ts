import { rejects } from "assert";
import { resolve } from "path";

// the most used type
const obj = { name: "john", age: 24 };

type Person = keyof typeof obj;

// a super useful type
const func = () => {
  const val = "string";

  // type Return = typeof val;

  return val;
};

type Return = ReturnType<typeof func>;

const asyncFunc = async () => {
  const val = "string";

  // type Return = typeof val;

  return val;
};

type AsyncReturn = Awaited<ReturnType<typeof asyncFunc>>;

interface MainType {
  name: string;
  age: number;
}

type NestedType = MainType & { isDeveloper: boolean };

type Prettify<T> = { [K in keyof T]: T[K] } & {};

type idk = Prettify<NestedType>;

// a super neat type
interface Todo {
  title: string;
  description: string;
}

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
  return { ...todo, fieldsToUpdate };
};

const initialTodo: Todo = {
  title: "clean the dishes",
  description: "RIGHT NOW THEY ARE SMELLY",
};

const updatedTodo = updateTodo(initialTodo, { description: "something else" });

// the omit types are based too
const todo: Todo = { title: "", description: "" };

type Omitted_0 = Omit<Todo, "description">;
const tryOmitted: Omitted_0 = { title: "Do your work" };

type Shapes =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number };

type Omitted = Exclude<Shapes, { kind: "circle" }>;
const tryOmitObj: Omitted = { kind: "square", x: 3 };

// Promise
const divide = (num_a: number, num_b: number) => {
  return new Promise<number>((resolve, rejects) => {
    setTimeout(() => {
      if (num_b !== 0) {
        resolve(num_a / num_b);
      }
      rejects("Division by zero is not allowed.");
    }, 3000);
  });
};

const letsCalculate = () => {
  divide(4, 2)
    .then((res) => {
      console.log(`Division result is: ${res}`);
    })
    .catch((err) => {
      console.log(`Oops: ${err}`);
    });
};

// letsCalculate();

const letsCalculateAsync = async (n1: number, n2: number) => {
  let result: number;
  try {
    result = await divide(n1, n2);
    console.log(`Division result is: ${result}`);
  } catch (error) {
    console.log(`Oops: ${error}`);
  }
};

letsCalculateAsync(36, 2);
