function removeItem() {
    $(this).parent().parent().remove();
}

function removeSection() {
    $(this).parent().parent().parent().remove();
}

$(document).on('click','.delete-item', removeItem);
$(document).on('click','.delete-section', removeSection);