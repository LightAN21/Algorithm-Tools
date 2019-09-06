// Fibonacci heap

function new_min_priority_queue() {
    return {
        min: null,
        root_list: new_doubly_linked_list_queue(),
        length: 0,
        push: min_priority_queue_push,
        pop_min: min_priority_queue_pop_min,
        get_min: min_priority_queue_get_min_data,
        print: min_priority_queue_prnit,
    };
}

function new_priority_queue_node(data, priority) {
    return {
        data: data,
        priority: priority,
        children_list: new_doubly_linked_list_queue(),
    };
}

function min_priority_queue_push(data, priority = 0) {
    var n = new_priority_queue_node(data, priority);
    this.root_list.push(n);
    if (this.min == null)
        this.min = this.root_list.last;
    else if (n.priority < this.min.data.priority)
        this.min = this.root_list.last;
    this.length++;
}

function min_priority_queue_pop_min() {
    var m = this.min;
    var root_list = this.root_list;
    var num = {};
    var record = {};
    var tmp;

    if (m == null)
        return null;
    melt_children_list_to_root_list(m, root_list);
    this.min = root_list.first;

    
    return m;
}

function melt_children_list_to_root_list(node, root_list) {
    if (node == null)
        return;
    var m = node.data;
    if (m.children_list.first == null) {
        root_list.remove(node);
    }
    else {
        root_list.connect(node.pre, m.children_list.first);
        root_list.connect(m.children_list.last, node.next);
        if (node == root_list.first)
            root_list.first = m.children_list.first;
        if (node == root_list.last)
            root_list.last = m.children_list.last;
        root_list.length += m.children_list.length - 1;
    }
}

function min_priority_queue_get_min_data() {
    return this.min.data;
}

function min_priority_queue_prnit() {
    var lst = this.root_list;
    var n = lst.first;

    console.log(lst);
    console.log('');
    if (n != null) {
        console.log(n.data);
        for (n = n.next; n != null && n != lst.first; n = n.next) {
            console.log(n.data);
        }
    }
    console.log('');
    console.log('min:');
    console.log(this.min);
    console.log('=========================================');
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
