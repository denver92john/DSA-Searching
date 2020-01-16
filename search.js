function binarySearch(array, value, start, end) {
    let start = start === undefined ? 0 : start;
    let end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

	console.log('new search');
    console.log(start, end);
    console.log(index, item);
    
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
}

module.exports = {
    binarySearch,
    linearSearch
};