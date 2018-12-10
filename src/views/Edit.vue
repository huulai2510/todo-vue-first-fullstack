<template>
  <b-container class="mt-5">
    <b-row class="my-4">
      <b-col sm="3"><label for="Title">Title:</label></b-col>
      <b-col sm="6"><b-form-input type="text" v-model="title"></b-form-input></b-col>
    </b-row>
    <b-row class="my-4">
      <b-col sm="3"><label for="Description">Description:</label></b-col>
      <b-col sm="6"><b-form-input type="text" v-model="description"></b-form-input></b-col>
    </b-row>
    <b-row class="my-4">
      <b-col offset-md="7">
        <b-button variant="outline-danger" class="mr-2" @click="clearTodo">Cancel</b-button>
        <b-button variant="outline-primary" @click="submitTodo">Submit</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      description: ""
    }
  },
  computed: {
    todoId() {
      return this.$route.params.id
    },
    todos() {
      return this.$store.getters.todos
    }
  },
  methods: {
    clearTodo() {
      this.title = "";
      this.description = "";
    },
    submitTodo() {
      let { title, description } = this;
      let params = {
        title,
        description
      }
      if(this.todoId) {
        params.id = this.todoId
      }
      this.$store.dispatch("submitTodo", params)
    }
  },
  created() {
    try {
      if(this.todoId) {
        let idx = this.todos.findIndex(item => {
          return item.id == this.todoId
        })
        this.title = this.todos[idx].title
        this.description = this.todos[idx].description
      }
    } catch (error) {
      // eslint-disable-next-line 
      console.log(error)
    }
  }
}
</script>
