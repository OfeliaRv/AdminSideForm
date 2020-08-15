function encode(s) {
    var out = [];
    for (var i = 0; i < s.length; i++) {
        out[i] = s.charCodeAt(i);
    }
    return new Uint8Array(out);
}

const reducerFunction = (data, element) => {
    data[element.name] = element.value;
    console.log(JSON.stringify(data));
    return data;
};

const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

const isValidElement = element => {
    return element.name && element.value;
};

const isCheckbox = element => element.type === 'checkbox';
const isMultiSelect = element => element.options && element.multiple;

const formToJSON = elements => [].reduce.call(elements, (data, element) => {

    if (isValidElement(element) && isValidValue(element)) {
        if (isCheckbox(element)) {
            data[element.name] = (data[element.name] || []).concat(element.value);
        } else {
            data[element.name] = element.value;
        }
    } else {
        data[element.name] = (data[element.name] || null);
    }

    return data;
}, {});

const handleFormSubmit = event => {
    event.preventDefault();
    const data = formToJSON(form.elements);
    delete data.example;
    delete data[""];
    const readyData = JSON.stringify(data, null, "  ");
    console.log(readyData);

    var encData = encode(readyData);

    var blob = new Blob([encData], {
        type: 'application/octet-stream'
    });

    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.setAttribute('href', url);
    var month = new Date().getUTCMonth();
    link.setAttribute('download', 'formData_' + new Date().getDate() + "." + (month + 1) + "." + new Date().getFullYear() + '.txt');

    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent(event);
}

const form = document.getElementsByClassName('form')[0];
form.addEventListener('submit', handleFormSubmit);