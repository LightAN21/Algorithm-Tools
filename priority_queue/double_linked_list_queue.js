function new_double_linked_list_queue() {
    return {
        first: null,
        last: null,
        length: 0,
    };
}

function new_double_linked_list_queue_node(data) {
    return {
        data: data,
        pre: null,
        next: null,
    };
}

function double_linked_list_queue_push(data) {
    var n = new_double_linked_list_queue_node(data);

    if (this.first != null) {
        n.pre = this.last;
        n.next = this.first;
        this.last.next = n;
        this.first.pre = n;
    }
    else {
        n.pre = n;
        n.next = n;
        this.first = n;
        this.last = n;
    }
}

function double_linked_list_queue_pop() {
    var pop_data = this.first.data;

    this.first.next.pre = this.last;
    this.last.next = this.first.next;
    this.first = this.first.next;
    return pop_data;
}

