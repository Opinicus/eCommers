export function filter() {
    $("#search-bar-update").on("input", (ev) => {
        let text = $(ev.target).val();
        let containers = $(".product-container");
        for (let i = 0, len = containers.length; i < len; i++) {
            if (containers.eq(i).find(".product-title").text().indexOf(text) < 0) {
                containers.eq(i).addClass("hidden");
            }
            else {
                containers.eq(i).removeClass("hidden");
            }
        }
    });
}