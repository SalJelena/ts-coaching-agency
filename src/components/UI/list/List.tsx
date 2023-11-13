import { ReactNode } from "react";

type ListProps<T> = {
    items: T[];
    number?: number;
    renderItem: (item: T) => ReactNode
}

function List<T>({ items, number, renderItem}: ListProps<T>) {

    if (number) {
        return <div>
            {items.map(renderItem).slice(0, number)}
        </div>
    }

    return (
        <div>
            {items.map(renderItem)}
        </div>
    )
}

export default List