export default function(container: HTMLElement | string = "[data-scroll-container]"): number {
    if (typeof container === "string") {
        container = (document.querySelector(container) || document.body) as HTMLElement;
    }

    const transform = container.style.transform?.slice(48).split(",")[0] || "0";
    return parseFloat(transform) * -1;
}