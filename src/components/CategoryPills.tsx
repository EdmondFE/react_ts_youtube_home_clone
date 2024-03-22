import Button from "./Button";

/**
 * Difference between interface is that interface is for the shape of the object while type is for different types of data;
 */
type CategoryPillsProps = {
    categories: string[];
    selected_category: string;
    onSelect: (category: string) => void;
};

const CategoryPills = ({ categories, selected_category, onSelect }: CategoryPillsProps) => {
    return (
        <div className="overflow-x-hidden relative">
            <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={category === selected_category ? "dark" : "default"}
                        className="py-1 px-3 rounded-lg whitespace-nowrap"
                        onClick={() => onSelect(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default CategoryPills;
