$.fn.ignore = function (sel) {
    return this.clone().find(sel || ">*").remove().end();
};

function getFormHeading() {
    var heading = $('.form-section-heading > .heading').ignore("span").text();
    return heading;
}