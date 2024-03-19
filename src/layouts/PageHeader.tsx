import { MonitorPlay, MenuIcon } from "lucide-react";

const PageHeader = () => {
    return (
        <div className="flex gap-10 lg:gap-20 justify-between">
            <div className="flex gap-4 items-center flex-shrink-0">
                <button className="text-zinc-500 hover:text-zinc-700">
                    <MenuIcon/>
                </button>
                <a href="/" className="flex gap-2">
                    <MonitorPlay size="24px" color="red" />
                    WebTube
                </a>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default PageHeader;
