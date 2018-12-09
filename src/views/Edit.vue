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
  methods: {
    clearTodo() {
      this.title = "";
      this.description = "";
    },
    submitTodo() {
      let { title, description } = this;
      this.$store.dispatch("submitTodo", {title, description})
    }
  }
}
</script>
