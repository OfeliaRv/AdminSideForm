// ignore() is in function_tools.js

$(document).ready(function () {
    $('input').each(function () {
        if ($(this).parent().parent().hasClass("radio-type") || $(this).parent().parent().hasClass("checkbox-type")) {
            $(this).attr("value", $(this).parent().find("label").ignore("svg").text().replace(/^\s+|\s+$/g, ''));
            $(this).attr("name", $(this).parent().parent().find(".heading").ignore(".required").ignore("svg").text().replace(/^\s+|\s+$/g, ''));
        }

        if ($(this).parent().hasClass("text-type") || $(this).parent().hasClass("multiline-text-type") || $(this).parent().hasClass("file-type")) {
            $(this).attr("name", $(this).parent().find(".heading").ignore(".required").ignore("svg").text().replace(/^\s+|\s+$/g, ''));
        }

        if ($(this).parent().hasClass("form-check-label") && !$(this).hasClass("checkbox-input")) {
            $(this).attr("name", $(this).parent().parent().parent().find(".heading").ignore(".required").ignore("svg").text().replace(/^\s+|\s+$/g, ''));
        }
    });
});

$(".form").submit(function () {
    $('.checkbox-input').each(function () {
        $(this).parent().parent().find(".form-check-input").val($(this).val());
    });
});

//required property assignment
$(document).ready(function () {
    $('input').each(function () {
        if ($(this).parent().find(".heading").find(".required").hasClass("required") || ($(this).parent().parent().find(".heading").find(".required").hasClass("required") && !$(this).parent().parent().hasClass("checkbox-type"))) {
            $(this).prop('required', true);
        }

        if ($(this).parent().parent().hasClass("checkbox-type") && $(this).parent().parent().find(".heading").find(".required").hasClass("required")) {
            $(this).parent().parent().addClass("ch-required");
        }
    });

    $('div.checkbox-type.ch-required :checkbox:checked').length > 0
});