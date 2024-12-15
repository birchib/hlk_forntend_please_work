import { useState } from "react";

interface ListSupportGroupProps {
    items: Record<string, string[]>;
    heading: string;
    onSelectItem: (item: string) => void; // Callback when an item is clicked
}

const ListSupportGroup = ({ items, heading, onSelectItem }: ListSupportGroupProps) => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    };

    return (
        <>
            <h1>{heading}</h1>
            {Object.keys(items).length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {Object.keys(items).map((category) => (
                    <li key={category}>
                        <div
                            style={{ fontWeight: "bolder", backgroundColor: "rgba(0, 176, 240, 1)" }}
                            className={
                                expandedCategory === category
                                    ? "list-group-item active"
                                    : "list-group-item"
                            }
                            onClick={() => toggleCategory(category)}
                        >
                            {category}
                        </div>
                        {expandedCategory === category && (
                            <ul className="list-group sub-list">
                                {items[category].map((item) => (
                                    <li
                                        key={item}
                                        className="list-group-item"
                                        onClick={() => onSelectItem(item)} // Call onSelectItem when clicked
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ListSupportGroup;