import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Infinite snaps`;
    }, [title])
};

export default useTitle;