export function navigateToTop(path) {
    if (document.readyState === "complete") {
        if (location.pathname !== `/${path ?? ""}`) return;

        document.getElementById("top")?.scrollIntoView({
            behavior: "smooth"
        });
        console.log(`/${path ?? ""} loaded`)
    }
}