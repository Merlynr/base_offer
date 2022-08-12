<template>
  <div>
    <div v-show="true" id="todo-list-example">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="E.g. Feed the cat"
        />
        <button>Add</button>
      </form>
      <ul>
        <li
          is="todo-item"
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
          v-on:child-text="child($event)"
        ></li>
      </ul>
    </div>
    <div v-show="false" id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    <div v-show="false" id="example-2">
      <!-- `greet` 是在下面定义的方法名 -->
      <button v-on:click="greet">Greet</button>
    </div>
    <div v-show="false" id="example-3" v-on:click.ctrl="alert('Hello   world')">
      <button v-on:click="say('hi', $event)">Say hi</button>
      <button v-on:click.once="say('hello', $event)">Say what</button>
    </div>
    <div v-show="false" id="example-4">
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <input type="radio" id="three" value="Three" v-model="picked" />
      <label for="three">Three</label>
      <br />
      <span>Picked: {{ picked }}</span>
    </div>
    <input type="number" v-model.number="msg" />
    {{ msg }}
  </div>
</template>
<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  data() {
    return {
      msg: "",
      picked: "",
      counter: 0,
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "Do the dishes",
        },
        {
          id: 2,
          title: "Take out the trash",
        },
        {
          id: 3,
          title: "Mow the lawn",
        },
      ],
      nextTodoId: 4,
    };
  },
  components: {
    todoItem: TodoItem,
  },
  methods: {
    child(e) {
      console.log(e);
    },
    say: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        console.log(event);
        event.preventDefault();
        event.stopPropagation();
      }
      alert(message);
    },
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert("Hello " + this.name + "!");
      // `event` 是原生 DOM 事件
      if (event) {
        console.log(event.target);
      }
    },
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
};
</script>
>
