function showSelector() {
    $(".add-section").css("display", "none");
    $(".choose-section").css("display", "flex");
}

function addSection() {
    $(".choose-section").css("display", "none");
    var mainFormId = $(this).parent().parent().parent().attr('id');  // to get main form id
    var count = 0;

    $('#' + mainFormId + ' > div').each(function () {
        if ($(this).hasClass('form-group')) {
            count++;
        }
    });

    //We use count, because add-section div has form-group class as well, but it is not counted as a form.

    if ($(this).hasClass('add-text')) {
        $('<div id="form' + count + '" class="form-group text-type section-new">').insertBefore('#' + mainFormId + ' > div:last');
        $('.section-new').append('<div class="form-section-heading section-heading-new"></div>');
        $('.section-heading-new').append('<div class="heading-list heading-list-new"></div>');
        $('.heading-list-new').append('<label for="input' + count + '" class="heading heading-en">New Text Section <span class="required">*</span></label>');
        $('.heading-list-new').append('<label for="input' + count + '" class="heading heading-az">Yeni Mətn Bölməsi <span class="required">*</span></label>');
        $('.section-heading-new').append('<div class="options options-new"></div>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil edit-section" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" /><path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" /></svg>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash delete-section" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /></svg>');
        $('.section-new').append('<input type="text" name="input' + count + '" class="form-control" id="input' + count + '" placeholder="Your Answer">');
    }

    if ($(this).hasClass('add-multiline-text')) {
        $('<div id="form' + count + '" class="form-group multiline-text-type section-new">').insertBefore('#' + mainFormId + ' > div:last');
        $('.section-new').append('<div class="form-section-heading section-heading-new"></div>');
        $('.section-heading-new').append('<div class="heading-list heading-list-new"></div>');
        $('.heading-list-new').append('<label for="input' + count + '" class="heading heading-en">New Text Section <span class="required">*</span></label>');
        $('.heading-list-new').append('<label for="input' + count + '" class="heading heading-az">Yeni Tekst Bölməsi <span class="required">*</span></label>');
        $('.section-heading-new').append('<div class="options options-new"></div>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil edit-section" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" /><path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" /></svg>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash delete-section" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /></svg>');
        $('.section-new').append('<textarea rows="4" cols="50" name="input' + count + '" class="form-control" id="input' + count + '" style="resize: none;" placeholder="Your Answer"></textarea>');
    }

    if ($(this).hasClass('add-radio')) {
        $('<div id="form' + count + '" class="form-group radio-type section-new">').insertBefore('#' + mainFormId + ' > div:last');
        $('.section-new').append('<div class="form-section-heading section-heading-new"></div>');
        $('.section-heading-new').append('<div class="heading-list heading-list-new"></div>');
        $('.heading-list-new').append('<label for="input' + count + '" class="heading heading-en">New Single Answer Section <span class="required">*</span></label>');
        $('.heading-list-new').append('<label for="input' + count + '" class="heading heading-az">Yeni Tək Cavab Bölməsi <span class="required">*</span></label>');
        $('.section-heading-new').append('<div class="options options-new"></div>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil edit-section" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" /><path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" /></svg>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash delete-section" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /></svg>');
        $('.section-new').append('<div class="form-check form-check-new"></div>');
        $('.form-check-new').append('<input class="form-check-input" type="radio" name="form' + count + '" id="form' + count + '_radio1" value="newItem">');
        $('.form-check-new').append('<label class="form-check-label label-new" for="form' + count + '_radio1"><span class="option-en">New Item </span> | <span class="option-az">Yeni seçim</span></label>');
        $(".label-new").append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil edit-item" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" /><path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" /></svg>');
        $(".label-new").append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash delete-item" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /></svg>');
        $('.section-new').append('<div class="add-item add-item-new"></div>');
        $('.add-item-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle add-item-icon" fill="cornflowerblue" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" /><path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" /><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /></svg>');
        $('.add-item-new').append('<p>Add item</p>');
        $('.section-new').append('<div class="add-field add-field-new"></div>');
        $('.add-field-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-input-cursor-text add-item-icon" fill="cornflowerblue" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2zm3.352 1.355zm-.704 9.29z"/><path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v1zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4z"/></svg>');
        $('.add-field-new').append('<p>Add field</p>');
    }

    if ($(this).hasClass('add-checkbox')) {
        $('<div id="form' + count + '" class="form-group checkbox-type section-new">').insertBefore('#' + mainFormId + ' > div:last');
        $('.section-new').append('<div class="form-section-heading section-heading-new"></div>');
        $('.section-heading-new').append('<div class="heading-list heading-list-new"></div>');
        $('.heading-list-new').append('<label for="input' + count + '" class="heading heading-en">New Multiple Answers Section <span class="required">*</span></label>');
        $('.heading-list-new').append('<label for="input' + count + '" class="heading heading-az">Yeni Çox Cavablar Bölməsi <span class="required">*</span></label>');
        $('.section-heading-new').append('<div class="options options-new"></div>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil edit-section" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" /><path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" /></svg>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash delete-section" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /></svg>');
        $('.section-new').append('<div class="form-check form-check-new"></div>');
        $('.form-check-new').append('<input class="form-check-input" type="checkbox" name="form' + count + '" id="form' + count + '_check1" value="newItem">');
        $('.form-check-new').append('<label class="form-check-label label-new" for="form' + count + '_check1"><span class="option-en">New Item </span> | <span class="option-az">Yeni seçim</span></label>');
        $(".label-new").append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil edit-item" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" /><path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" /></svg>');
        $(".label-new").append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash delete-item" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /></svg>');
        $('.section-new').append('<div class="add-item add-item-new"></div>');
        $('.add-item-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square add-item-icon" fill="cornflowerblue" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/><path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/><path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/></svg>');
        $('.add-item-new').append('<p>Add item</p>');
        $('.section-new').append('<div class="add-field add-field-new"></div>');
        $('.add-field-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-input-cursor-text add-item-icon" fill="cornflowerblue" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2zm3.352 1.355zm-.704 9.29z"/><path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v1zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4z"/></svg>');
        $('.add-field-new').append('<p>Add field</p>');
    }

    if ($(this).hasClass('add-validator')) {
        $('<div id="form' + count + '" class="form-group form-check check section-new">').insertBefore('#' + mainFormId + ' > div:last');
        $('.section-new').append('<input type="checkbox" name="isAcceptedTerms" value="Yes" class="form-check-input" id="form' + count + '" required>');
        $('.section-new').append('<label class="form-check-label check-label check-label-en" for="form' + count + '">New Validation<span class="required">*</span></label>');
        $('.section-new').append('<label class="form-check-label check-label check-label-az label-new" for="form' + count + '">Yeni təsdiqləmə<span class="required">*</span></label>');
        $('.label-new').append('<div class="options options-new"></div>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil edit-section" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" /><path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" /></svg>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash delete-section" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /></svg>');
    }

    if ($(this).hasClass('add-file')) {
        $('<div id="form' + count + '" class="form-group file-type section-new">').insertBefore('#' + mainFormId + ' > div:last');
        $('.section-new').append('<div class="form-section-heading section-heading-new"></div>');
        $('.section-heading-new').append('<div class="heading-list heading-list-new"></div>');
        $('.heading-list-new').append('<label for="input' + count + '" class="heading heading-en">New File Input Section <span class="required">*</span></label>');
        $('.heading-list-new').append('<label for="input' + count + '" class="heading heading-az">Yeni Fayl Bölməsi <span class="required">*</span></label>');
        $('.section-heading-new').append('<div class="options options-new"></div>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil edit-section" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" /><path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" /></svg>');
        $('.options-new').append('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash delete-section" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /></svg>');
        $('.section-new').append('<input type="file" class="form-control-file" id="input' + count + '">');
    }

    $("div").removeClass("section-new");
    $("div").removeClass("section-heading-new");
    $("div").removeClass("heading-list-new");
    $("div").removeClass("options-new");
    $("div").removeClass("form-check-new");
    $("label").removeClass("label-new");
    $("div").removeClass("add-item-new");
    $("div").removeClass("add-field-new");
    $(".add-section").css("display", "flex").insertBefore('#' + mainFormId + ' > div:last');
}

$('.add-section').on('click', showSelector);
$('.choose-item').on('click', addSection);
