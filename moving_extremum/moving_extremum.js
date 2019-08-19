
// Time complexity: O(n), where n is the length of the input array.
// Space complexity: O(n).
function moving_extremum_algorithm(arr, win_size) {
    if (win_size < 1) {
        return 0;
    }
    else if (win_size > arr.length) {
        win_size = arr.length;
    }

    var res_max = [], res_min = [];
    var record = new Array(arr.length);
    var reverse = new Array(arr.length);
    var curr, re_curr, end = 0;

    for (var i = 0; i < arr.length; i++) {
        curr = i % win_size;
        
        if (curr == 0) {
            end = (i + win_size <= arr.length) ? (i + win_size - 1) : (arr.length - 1) ;
        }
        record[i] = {
            max: (curr == 0 || arr[i] > record[i - 1].max) ? arr[i] : record[i - 1].max,
            min: (curr == 0 || arr[i] < record[i - 1].min) ? arr[i] : record[i - 1].min,
        };
        
        re_curr = end - curr;
        reverse[re_curr] = {
            max: (curr == 0 || arr[re_curr] > reverse[re_curr + 1].max) ? arr[re_curr] : reverse[re_curr + 1].max,
            min: (curr == 0 || arr[re_curr] < reverse[re_curr + 1].min) ? arr[re_curr] : reverse[re_curr + 1].min,
        };

        if (i >= win_size - 1){
            res_max.push((reverse[i - win_size + 1].max > record[i].max) ? reverse[i - win_size + 1].max : record[i].max);
            res_min.push((reverse[i - win_size + 1].min < record[i].min) ? reverse[i - win_size + 1].min : record[i].min);
        }
    }

    return {
        max: res_max,
        min: res_min,
    };
}