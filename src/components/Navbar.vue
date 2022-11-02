<template>
  <div class="navbar">
    <div @click="$router.push('/')">Hey look you can click on the buttons</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')" style="margin-right: -1px"
        >Posts</my-button
      >
      <my-button @click="$router.push('/about')" style="margin-right: -1px"
        >About</my-button
      >
      <my-button @click="$router.push('/store')">Store</my-button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar {
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
