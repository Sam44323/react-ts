export interface Todo{
  id: number,
  text: string
};

export interface DeleteMethod{
  (id: number) : void
}

export interface AddTodo{
  (value: string) : void
}