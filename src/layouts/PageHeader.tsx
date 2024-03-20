import { MonitorPlay, MenuIcon } from "lucide-react";
import Button from "../components/Button";

const PageHeader = () => {
    return (
        <div className="flex gap-10 lg:gap-20 justify-between p-2 mb-6 mx-4">
            <div className="flex gap-4 items-center flex-shrink-0">
                <Button variant="ghost" size="icon">
                    <MenuIcon />
                </Button>
                <a href="/" className="flex gap-2">
                    <MonitorPlay size="24px" color="red" />
                    WebTube
                </a>
            </div>
            <div></div>
            <div>
                
            </div>
        </div>
    );
};

export default PageHeader;
