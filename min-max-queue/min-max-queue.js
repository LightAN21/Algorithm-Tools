
function new_min_max_queue() {
    var q = {
        front: null,
        tail: null,
        stack_1: [],
        stack_2: [],
        length: 0,
        push: min_max_queue_push,
        pop: min_max_queue_pop,
        get_min: min_max_queue_get_min,
        get_max: min_max_queue_get_max,
        get_front: min_max_queue_get_front,
        get_tail: min_max_queue_get_tail,
        print: min_max_queue_print,
    };
    return q;
}

function save_min_max_to_node(node, latest, data) {
    if (latest == undefined) {
        node.min = data;
        node.max = data;
        return;
    }
    if (data >= latest.max)
        node.max = data;
    else
        node.max = latest.max;
    if (data <= latest.min)
        node.min = data;
    else
        node.min = latest.min;
}

function min_max_queue_push(data) {
    var n = {
        data: data,
        min: data,
        max: data,
    };

    if (this.front != null) {
        var latest = this.stack_2[this.stack_2.length - 1];
        save_min_max_to_node(n, latest, data);
        this.stack_2.push(n);
    }
    else {
        this.front = n;
        this.stack_1.push(n);
    }
    this.tail = n;
    this.length++;
}

function min_max_queue_pop() {
    if (this.front == null) {
        return null;
    }
    var data = this.stack_1.pop().data;

    this.length--;
    if (this.stack_1.length == 0 && this.stack_2.length == 0) {
        this.front = null;
        this.tail = null;
        return data;
    }
    if (this.stack_1.length == 0) {
        while (this.stack_2.length) {
            var n = this.stack_2.pop();
            var latest = this.stack_1[this.stack_1.length - 1];
            save_min_max_to_node(n, latest, n.data);
            this.stack_1.push(n);
        }
    }
    this.front = this.stack_1[this.stack_1.length - 1];
    return data;
}

function min_max_queue_get_min() {
    var n1 = this.stack_1[this.stack_1.length - 1];
    var n2 = this.stack_2[this.stack_2.length - 1];

    if (n1 == undefined && n2 == undefined)
        return null;
    else if (n2 == undefined)
        return n1.min;
    else if (n1 == undefined)
        return n2.min;
    if (n1.min < n2.min)
        return n1.min;
    return n2.min;
}

function min_max_queue_get_max() {
    var n1 = this.stack_1[this.stack_1.length - 1];
    var n2 = this.stack_2[this.stack_2.length - 1];

    if (n1 == undefined && n2 == undefined)
        return null;
    else if (n2 == undefined)
        return n1.max;
    else if (n1 == undefined)
        return n2.max;
    if (n1.max > n2.max)
        return n1.max;
    return n2.max;
}

function min_max_queue_get_front() {
    if (this.front != null)
        return this.front.data;
    return null;
}

function min_max_queue_get_tail() {
    if (this.tail != null)
        return this.tail.data;
    return null;
}

function min_max_queue_print() {
    var str = '[ ';
    if (this.front != null) {
        for (var i = this.stack_1.length - 1; i >= 0; i--) {
            str += this.stack_1[i].data + ' ';
        }
        for (var i = 0; i < this.stack_2.length; i++) {
            str += this.stack_2[i].data + ' ';
        }
    }
    str += ']';
    console.log('Main queue:');
    console.log(str);
    console.log('min: ' + this.get_min());
    console.log('max: ' + this.get_max());
    console.log('stack_1:');
    print_array(this.stack_1, 1);
    console.log('stack_2:');
    print_array(this.stack_2, 2);
    console.log('======================');
    return str;
}

function print_array(arr) {
    var str = '[ ';

    if (arr.length != 0) {
        for (var i = 0 ; i < arr.length; i++){
            str += arr[i].data + ' ';
        }
    }
    str += ']';
    console.log(str);
    return str;
}

function get_array(arr, type){
    var str = '[ ';

    if (arr.length != 0) {
        for (var i = 0 ; i < arr.length; i++){
            str += arr[i][type] + ' ';
        }
    }
    str += ']';
    return str;
}

function get_array_reverse(arr, type){
    var str = '[ ';

    if (arr.length != 0) {
        for (var i = arr.length - 1 ; i >= 0; i--){
            str += arr[i][type] + ' ';
        }
    }
    str += ']';
    return str;
}