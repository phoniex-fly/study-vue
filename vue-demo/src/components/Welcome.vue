<template>
    <div class="welcome">
      <img src="../assets/joinus.jpeg">
    </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang="less" scoped>
.welcome{
  width: 100%;
  height: 100%;
  background-color: #F6F6F6;
}
img{
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-35%,-40%);
}
</style>
