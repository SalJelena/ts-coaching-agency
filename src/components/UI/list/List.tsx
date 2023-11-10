import { ReactNode } from "react";

type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode
}

function List<T>({ items, renderItem}: ListProps<T>) {
  return (
    <div>
        {items.map(renderItem)}
    </div>
  )
}

export default List