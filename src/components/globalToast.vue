<template>
  <div class="toast">
    <transition-group name="toast-box" mode="out-in" tag="ul">
      <!-- <div> -->
        <li class="toast-box" v-for="(message, index)  in Gnotices"  :key="index">
          <div :class="['toast-msg','toast-msg-'+message.type]">
            <i class="fa" :class="{'fa-check':message.type==='success', 'fa-times':message.type==='error', 'fa-info':message.type==='info'}"></i>
            <span>{{ message.content }}</span>
          </div>
        </li>
      <!-- </div> -->
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    props: {
      Gnotices: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import "../assets/stylus/_toast.styl"
</style>
