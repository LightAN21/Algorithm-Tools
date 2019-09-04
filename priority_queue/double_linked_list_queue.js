function new_doubly_linked_list_queue() {
    return {
        first: null,
        last: null,
        length: 0,
        push: doubly_linked_list_queue_push,
        pop: doubly_linked_list_queue_pop,
        remove: doubly_linked_list_remove_node,
        connect: doubly_linked_list_connect_nodes,
    };
}

function new_doubly_linked_list_node(data) {
    return {
        data: data,
        pre: null,
        next: null,
    };
}

function doubly_linked_list_queue_push(data) {
    var n = new_doubly_linked_list_node(data);

    if (this.first != null) {
        n.pre = this.last;
        n.next = this.first;
        this.last.next = n;
        this.first.pre = n;
        this.last = n;
    }
    else {
        n.pre = n;
        n.next = n;
        this.first = n;
        this.last = n;
    }
    this.length++;
}

function doubly_linked_list_queue_pop() {
    if (this.first == null)
        return null;

    var pop_data = this.first.data;
    this.first.next.pre = this.last;
    this.last.next = this.first.next;
    this.first = this.first.next;
    this.length--;
    return pop_data;
}

function doubly_linked_list_remove_node(n) {
    if (n == null)
        return null
    n.pre.next = n.next;
    n.next.pre = n.pre;
    this.length--;
    return n;
}

function doubly_linked_list_connect_nodes(n, m) {
    n.next = m;
    m.pre = n;
}