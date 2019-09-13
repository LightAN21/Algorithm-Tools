// Fibonacci heap

function new_min_priority_queue() {
    return {
        min: null,
        root_list: new_doubly_linked_list_queue(),
        length: 0,
        push: min_priority_queue_push,
        pop_min: min_priority_queue_pop_min,
        get_min: min_priority_queue_get_min_data,
        print: min_priority_queue_print,
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
    var root_list = this.root_list;
    var num = {};

    if (this.min == null)
        return null;
    melt_children_list_to_root_list(this.min, root_list);
    this.min = root_list.first;
    if (root_list.first == null)
        return null;
    num[root_list.first.data.children_list.length] = root_list.first;
    for (var tmp = root_list.first.next; tmp != null; tmp = tmp.next) {
        var len = tmp.data.children_list.length;
        if (tmp.data.priority < this.min.data.priority){
            this.min = tmp;
        }
        if (len in num) {
            while (len in num) {
                var pre = num[len];
                delete num[len];

                if (pre.data.priority <= tmp.data.priority) {
                    pre.data.children_list.push(tmp.data);
                    root_list.remove(tmp);
                    len = pre.data.children_list.length;
                    tmp = pre;
                }
                else {
                    tmp.data.children_list.push(pre.data);
                    root_list.remove(pre);
                    len = tmp.data.children_list.length;
                }
            }
            num[len] = tmp;
        }
        else {
            num[len] = tmp;
        }
    }

    return this.min;
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

function min_priority_queue_print() {
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

function min_priority_queue_print_debug(list){

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
pq.push('22', 22);
pq.print();

pq.pop_min();
pq.print();

console.log(pq.min.data);
console.log(pq.pop_min().data);
console.log(pq.pop_min().data);
console.log(pq.pop_min().data);
console.log(pq.pop_min().data);
console.log(pq.pop_min().data);
console.log(pq.pop_min().data);
console.log(pq.pop_min().data);
console.log(pq.pop_min().data);
console.log(pq.pop_min());
console.log(pq.pop_min());
