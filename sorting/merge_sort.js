function merge_sort_ascending(arr) {
    var i, leftMin, leftMax, rightMin, rightMax, next;
    var tmp = new Array();

    for (var i = 1; i < arr.length; i *= 2) {
        for (leftMin = 0; leftMin < arr.length - i; leftMin = rightMax) {
            rightMin = leftMax = leftMin + i;
            rightMax = leftMax + i;
            if (rightMax > arr.length)
                rightMax = arr.length;
            next = 0;
            while (leftMin < leftMax && rightMin < rightMax)
                tmp[next++] = arr[leftMin] > arr[rightMin]
                    ? arr[rightMin++]
                    : arr[leftMin++];
            while (leftMin < leftMax)
                arr[--rightMin] = arr[--leftMax];
            while (next > 0)
                arr[--rightMin] = tmp[--next];
        }
    }
}

function merge_sort_descending(arr) {
    var i, leftMax, leftMin, rightMax, rightMin, next;
    var tmp = new Array();

    for (var i = 1; i < arr.length; i *= 2) {
        for (leftMax = 0; leftMax < arr.length - i; leftMax = rightMin) {
            rightMax = leftMin = leftMax + i;
            rightMin = leftMin + i;
            if (rightMin > arr.length)
                rightMin = arr.length;
            next = 0;
            while (leftMax < leftMin && rightMax < rightMin)
                tmp[next++] = arr[leftMax] < arr[rightMax]
                    ? arr[rightMax++]
                    : arr[leftMax++];
            while (leftMax < leftMin)
                arr[--rightMax] = arr[--leftMin];
            while (next > 0)
                arr[--rightMax] = tmp[--next];
        }
    }
}

function demo() {
    var a = [3, 5, 1, 6, 3, 10];
    var b = [...a];

    console.log(a);
    console.log('------------------------------------');
    merge_sort_ascending(a);
    console.log(a);
    merge_sort_descending(b);
    console.log(b);
}