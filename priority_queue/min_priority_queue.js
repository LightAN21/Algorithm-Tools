// Fibonacci heap

function new_min_priority_queue() {
    var q = {
        min: null,
        length: 0,
        push: min_priority_queue_push,
        pop_min: min_priority_queue_pop_min,
        get_min: min_priority_queue_get_min,
        get_front: min_priority_queue_get_front,
        get_rear: min_priority_queue_get_rear,
        print: min_priority_queue_print,
    };
    return q;
}

function new_priority_queue_node(data, priority) {
    return {
        data: data,
        priority: priority,
        pre: null,
        next: null,
        children_first: null,
        children_last: null,
        rank: 0,
    };
}

function min_priority_queue_push(data, priority) {
    var n = new_priority_queue_node(data, priority);
    if (this.min == null) {
        n.pre = n;
        n.next = n;
        this.min = n;
    }
    else if (priority < this.min.priority) {
        n.next = this.min;
        n.pre = this.min.pre;
        this.min.pre.next = n;
        this.min.pre = n;
        this.min = n;
    }
    else {
        n.next = this.min.next;
        n.pre = this.min;
        this.min.next.pre = n;
        this.min.next = n;
    }

}
function min_priority_queue_pop_min() {

}
function min_priority_queue_get_min() {

}
function min_priority_queue_get_front() {

}
function min_priority_queue_get_rear() {

}
function min_priority_queue_print() {

}

