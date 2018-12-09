<template>
  <div class="home">
    <b-container>
    <TodoList
      :todos="todos"
      @deleteTodo="deleteTodo($event)"
    ></TodoList>
    <b-pagination
      class="float-right"
      :total-rows="total"
      :per-page="row"
      v-model="currentPage"
    ></b-pagination>
    </b-container>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import {mapGetters} from 'vuex';

export default {
  name: 'home',
  components: {
    TodoList
  },
  computed: {
    ...mapGetters([
      'todos',
      'row',
      'pageId',
      'total'
    ]),
    currentPage: {
      get: function() {
        return this.pageId
      },
      set: function(newValue) {
        let payload = {
          row: this.row,
          pageId: newValue
        }
        this.$store.dispatch('getTodos', payload);
      }
    }
  },
  mounted() {
    let payload = {
      row: 3,
      pageId: 1
    }
    this.$store.dispatch('getTodos', payload);
  },
  methods: {
    deleteTodo(item) {
      this.$store.dispatch('deleteTodo', item);
    }
  }
}
</script>
