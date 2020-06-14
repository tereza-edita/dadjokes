'use strict'

new Vue({
  el: '#app',
  data: {
    upLikes: 0,
    downLikes: 0
  },
  methods: {
    addLike () {
      this.upLikes += 1
    },
    removeLike () {
      this.downLikes += 1
    }
  }
})
