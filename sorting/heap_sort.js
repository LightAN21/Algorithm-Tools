function max_heapify(arr, len, root) {
    var i, left, right, tmp;

    while (root < len) {
        i = root;
        left = 2 * root + 1;
        right = 2 * root + 2;
        if (left >= len && right >= len)
            break;
        if (left < len && arr[left] > arr[i])
            i = left;
        if (right < len && arr[right] > arr[i])
            i = right;
        if (i == root)
            break;
        tmp = arr[root];
        arr[root] = arr[i];
        arr[i] = tmp;
        root = i;
    }
}

function min_heapfiy(arr, len, root) {
    var i, left, right, tmp;

    while (root < len) {
        i = root;
        left = 2 * root + 1;
        right = 2 * root + 2;
        if (left >= len && right >= len)
            break;
        if (left < len && arr[left] < arr[i])
            i = left;
        if (right < len && arr[right] < arr[i])
            i = right;
        if (i == root)
            break;
        tmp = arr[root];
        arr[root] = arr[i];
        arr[i] = tmp;
        root = i;
    }
}

function heap_sort_ascending(arr) {
    var len = arr.length;

    for (var i = (len >> 1) - 1; i >= 0; i--)
        max_heapify(arr, len, i);
    for (var i = len - 1; i >= 0; i--) {
        var tmp = arr[0];
        arr[0] = arr[i];
        arr[i] = tmp;
        max_heapify(arr, i, 0);
    }
    return arr;
}

function heap_sort_descending(arr) {
    var len = arr.length;

    for (var i = (len >> 1) - 1; i >= 0; i--)
        min_heapfiy(arr, len, i);
    for (var i = len - 1; i >= 0; i--) {
        var tmp = arr[0];
        arr[0] = arr[i];
        arr[i] = tmp;
        min_heapfiy(arr, i, 0);
    }
    return arr;
}


function demo() {
    var a = [3, 5, 1, 6, 3, 10];
    var b = [...a];

    console.log(a);
    console.log('------------------------------------');
    heap_sort_ascending(a);
    console.log(a);
    heap_sort_descending(b);
    console.log(b);
}
