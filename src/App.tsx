import { useState } from "react";
import CategoryPills from "./components/CategoryPills";
import { categories } from "./data/home";
import PageHeader from "./layouts/PageHeader";

const App = () => {
    const [selected_category, setSelectedCategory] = useState(categories[0]);

    return (
        <div className="max-h-screen flex flex-col">
            <PageHeader />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
                <div>Sidebar</div>
                <div className="sticky top-0 bg-white z-10 pb-4">
                    <CategoryPills
                        categories={categories}
                        selected_category={selected_category}
                        onSelect={setSelectedCategory}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
