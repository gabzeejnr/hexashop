import { useEffect } from "react";

function useGoToTopOnLoad(path: string) {
    useEffect(function () {
        if (location.pathname !== `/${path ?? ""}`) return;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, [path])
}

export { useGoToTopOnLoad }