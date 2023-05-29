Vue.component('todo-footer-component',{
    template: '<p>This is another global child component</p>'
});

var cmp = {
    template: '<p>This is another local child component2</p>'
};

var app = new Vue({
    el: '#app',
    data: {
        message: 'This is a parent component'
    },
    components: {
        'todo-list-component': cmp
    }
});

