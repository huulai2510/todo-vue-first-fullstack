<template>
  <b-table :fields="fields" :items="todos">
    <template slot="id" slot-scope="data">
      {{data.item.id}}
    </template>
    <template slot="title" slot-scope="data">
      {{data.item.title}} 
    </template>
    <template slot="description" slot-scope="data">
      {{data.item.description}}
    </template>
    <template slot="option" slot-scope="data">
      <b-button variant="outline-danger" class="mr-2" @click="deleteTodo(data.item)">Delete</b-button>
      <b-button variant="outline-primary">Edit</b-button>
    </template>
  </b-table>
</template>
<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "ID"
        },
        {
          key: "title",
          label: "Todo"
        },
        {
          key: "description",
          label: "Description"
        },
        {
          key: 'option',
          label: "Option"
        }
      ]
    }
  },
  props: {
    todos: Array
  },
  methods: {
    deleteTodo(item) {
      this.$emit("deleteTodo", item);
    }
  }
}
</script>
