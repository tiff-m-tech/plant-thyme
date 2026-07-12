import { useEffect } from "react";

export const userName = "Tiffany";

export function usePageTitle(title) {
    useEffect(() => {
        document.title = `${title} | Plant Thyme`;
    }, [title]);
}
