// Fibonacci heap

function new_min_priority_queue() {
    var q = {
        min: null,
        first: null,
        last: null,
        length: 0,
        push: min_priority_queue_push,
        pop_min: min_priority_queue_pop_min,
        get_min: min_priority_queue_get_min_data,
        print: min_priority_queue_prnit,
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
        this.first = n;
        this.last = n;
    }
    else {
        n.next = this.first;
        n.pre = this.last;
        this.last.next = n;
        this.first.pre = n;
        this.last = n;
        if (priority < this.min.priority)
            this.min = n;
    }
}
function min_priority_queue_pop_min() {
    var m = this.min, n, mark = 0;
    var num = {};

    if (m == null)
        return null;
    melt_children_to_root_list(m);
    for (n = this.first; n != this.first || mark != 1; n = n.next) {

        if (n.priority < this.min.priority) {
            this.min = n;
        }

        var pre = num[n.rank]
        if (pre == undefined) {
            pre = n;
        }
        else if (pre.priority <= n.priority) {
            add_tree_to_children(n, pre);

        }
        else {
            add_tree_to_children(pre, n);
        }
        if (mark == 0)
            mark = 1;
    }
    return m;
}

function melt_children_to_root_list(m) {
    if (m == null)
        return;
    if (m.children_first == null) {
        m.pre.next = m.next;
        m.next.pre = m.pre;
    }
    else {
        m.pre.next = m.children_first;
        m.children_first.pre = m.pre;
        m.children_last.next = m.next;
        m.next.pre = m.children_last;
    }
    this.min = this.first;
}

// add tree n to children of m.
function add_tree_to_children(n, m) {
    if (m.children_first == null) {
        m.children_first = n;
        m.children_last = n;
        n.pre = n;
        n.next = n;
    }
    else {
        n.next = m.children_first;
        n.pre = m.children_last;
        m.children_last.next = n;
        m.children_first.pre = n;
        m.children_last = n;
    }
}

function min_priority_queue_get_min_data() {
    return this.min.data;
}

function min_priority_queue_prnit() {
    var n = this.first;

    console.log('');
    console.log(n);
    for (n = n.next; n != null && n != this.first; n = n.next) {
        console.log(n);
    }
    console.log('');
    console.log('min:');
    console.log(this.min);
    console.log('================================================================================');
}

var pq = new_min_priority_queue();

pq.push('2_1', 2);
pq.push('6', 6);
pq.push('1', 1);
pq.push('2_2', 2);
pq.push('7', 7);
pq.push('42', 42);
pq.push('26', 26);
pq.push('3', 3);
pq.push('52', 52);
pq.print();

pq.pop_min();
pq.print();
