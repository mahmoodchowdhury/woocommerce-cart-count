(function($) {
    // Update cart info using Ajax
    function updateCartInfo() {
        $.ajax({
            url: ajax_params.ajax_url,
            type: 'POST',
            data: {
                action: 'update_cart_info'
            },
            success: function(response) {
                if (response.item_count) {
                    $('.cart-info .count').text(response.item_count);
                } else {
                    $('.cart-info .count').text('0');
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                console.log('Ajax request failed: ' + errorThrown);
            }
        });
    }

    // Update cart info on page load
    $(document).ready(function() {
        updateCartInfo();
    });

    // Update cart info when items are added to or removed from the cart
    $(document.body).on('added_to_cart', function() {
        updateCartInfo();
    });

    // Update cart info when the cart page is loaded or refreshed
    $(document.body).on('updated_wc_div', function() {
        updateCartInfo();
    });

    // Update cart info when an item is removed from the cart
    $(document.body).on('removed_from_cart', function() {
        $(document.body).trigger('updated_wc_div');
    });
})(jQuery);
