<template>
  <div id="app">
    <h1>Todo App</h1>
    <h3>first project node - vue by Lai</h3>
    <b-nav tabs>
      <b-nav-item to="/" exact>Home</b-nav-item>
      <b-nav-item to="/edit">Create</b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
