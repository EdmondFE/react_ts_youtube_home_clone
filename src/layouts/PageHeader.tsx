import {
    MonitorPlay,
    MenuIcon,
    Upload,
    Bell,
    User,
    Mic,
    Search,
    ArrowLeft,
} from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

const PageHeader = () => {
    const [show_full_width_search, setShowFullWidthSearch] = useState(false);

    return (
        <div className="flex gap-10 lg:gap-20 justify-between p-2 mb-6 mx-4">
            <div
                className={`gap-4 items-center flex-shrink-0 ${
                    show_full_width_search ? "hidden" : "flex"
                }`}
            >
                {/* Menu button  */}
                <Button type="button" variant="ghost" size="icon">
                    <MenuIcon />
                </Button>
                {/* logo */}
                <a href="/" className="flex gap-2">
                    <MonitorPlay size="24px" color="red" />
                    WebTube
                </a>
            </div>
            <form
                className={`gap-4 flex-grow justify-center ${
                    show_full_width_search ? "flex" : "hidden md:flex"
                }`}
            >
                {show_full_width_search && (
                    <Button
                        onClick={() => setShowFullWidthSearch(false)}
                        type="button"
                        size={"icon"}
                        variant={"ghost"}
                        className="flex-shrink"
                    >
                        <ArrowLeft />
                    </Button>
                )}
                <div className="flex flex-grow max-w-[600px]">
                    <input
                        type="search"
                        placeholder="Search"
                        className="
                            rounded-l-full
                            border-secondary-border
                            border
                            shadow-inner
                            shadow-secondary
                            py-1 
                            px-4
                            text-lg 
                            w-full
                            focus:border-blue-500
                            outline-none"
                    />
                    <Button
                        className="
                            py-2
                            px-4
                            rounded-r-full
                            border-secondary-border
                            border
                            border-l-0
                            flex-shrink-0"
                        size={"default"}
                    >
                        <Search />
                    </Button>
                </div>
                <Button type="button" size={"icon"} className="flex-shrink">
                    <Mic />
                </Button>
            </form>
            <div
                className={`flex-shrink-0 md:gap-2 ${
                    show_full_width_search ? "hidden" : "flex"
                }`}
            >
                <Button
                    onClick={() => setShowFullWidthSearch(true)}
                    size="icon"
                    variant="ghost"
                    className="md:hidden"
                >
                    <Search />
                </Button>
                <Button size="icon" variant="ghost" className="md:hidden">
                    <Mic />
                </Button>
                <Button size="icon" variant="ghost">
                    <Upload />
                </Button>
                <Button size="icon" variant="ghost">
                    <Bell />
                </Button>
                <Button size="icon" variant="ghost">
                    <User />
                </Button>
            </div>
        </div>
    );
};

export default PageHeader;
