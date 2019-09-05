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
        this.last.next = n;
        this.last = n;
    }
    else {
        this.first = n;
        this.last = n;
    }
    this.length++;
}

function doubly_linked_list_queue_pop() {
    if (this.first == null)
        return null;

    var pop_data = this.first.data;
    this.first.next.pre = null;
    this.first = this.first.next;
    this.length--;
    return pop_data;
}

function doubly_linked_list_remove_node(n) {
    if (n == null)
        return null;
    if (n == this.first)
        return this.pop();
    else if (n == this.last) {
        this.last = this.last.pre;
        this.last.next = null;
    }
    else {
        n.pre.next = n.next;
        n.next.pre = n.pre;
    }
    this.length--;
    return n.data;
}

function doubly_linked_list_connect_nodes(n, m) {
    if (n != null && m != null) {
        n.next = m;
        m.pre = n;
    }
}