
function showSelectedVariantMetafield() {
    $("fieldset.js.product-form__input.variant-buttons-form:nth-child(1) label").click(function () {
        console.log("function called");
        setTimeout(() => {
            let h4 = $(".em-variant-sku h4");
            var meta = $(h4).not('.hidden').attr('data-metafield');
            let id = $(h4).not('.hidden').attr('data-id');
            $(".product-details .variantmet").html(meta);
        }, 1000);
    })
}
$(document).ready(function () {
    showSelectedVariantMetafield();
})