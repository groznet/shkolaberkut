async function loadInclude(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;

    const res = await fetch(url);
    const html = await res.text();

    el.innerHTML = html;

    el.dispatchEvent(new CustomEvent("include:loaded", {
        bubbles: true
    }));
}

async function initIncludes() {
    await loadInclude("#header", "/components/header.html");
    await loadInclude("#footer", "/components/footer.html");
    await loadInclude("#sidebar", "/components/sidebar.html");
}