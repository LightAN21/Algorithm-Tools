
function new_node(input) {
    return {
        data: input,
        next: null,
    };
}

function new_queue() {
    var q = {
        front: null,
        tail: null,
        length: 0,
        push: queue_push,
        pop: queue_pop,
        get_front: queue_get_front,
        get_tail: queue_get_tail,
        print: queue_print,
    };

    return q;
}

function queue_push(data) {
    var n = new_node(data);

    if (this.front != null) {
        this.tail.next = n;
        this.tail = n;
    }
    else {
        this.front = n;
        this.tail = n;
    }
    this.length++;
}

function queue_pop() {
    if (this.front == null) {
        return null;
    }
    var data = this.front.data;
    if (this.front.next == null) {
        this.front = null;
        this.tail = null;
    }
    else
        this.front = this.front.next;
    this.length--;
    return data;
}

function queue_get_front() {
    if (this.front != null)
        return this.front.data;
    return null;
}

function queue_get_tail() {
    if (this.tail != null)
        return this.tail.data;
    return null;
}

function queue_print() {
    var str = '[ ';
    if (this.front) {
        var tmp = this.front;

        while (tmp != null) {
            str += tmp.data + ' ';
            tmp = tmp.next;
        }
    }
    str += ']';
    console.log(str);
    return str;
}




function queue_test_cases() {
    var q = new_queue();

    q.push(3);
    q.push(5);
    q.push(8);
    q.print();

    console.log(q.get_front());
    console.log(q.get_tail());
    console.log(q.pop());
    q.print();

    console.log(q.pop());
    console.log(q.pop());
    console.log(q.pop());
    console.log(q.pop());
    q.print();

    q.push(3);
    q.push(23);
    q.push(42);
    q.push(2);
    q.print();
    console.log(q.get_front());
    console.log(q.get_tail());

    console.log(q.pop());
    q.print();

    console.log(q.pop());
    q.print();
    console.log(q.get_front());
    console.log(q.get_tail());

    console.log(q.pop());
    q.print();
    console.log(q.get_front());
    console.log(q.get_tail());

    console.log(q.pop());
    q.print();
    console.log(q.get_front());
    console.log(q.get_tail());
}