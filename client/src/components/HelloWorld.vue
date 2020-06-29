<template>
  <div class="hello">
    <input id="message" type="text" placeholder="Enter your text here" v-model="message"/>
    <a v-on:click="sendSMS(message)">
      <i class="btn far fa-arrow-alt-circle-up"></i>
    </a>
  </div>
</template>

<script>
const API_URL = 'http://localhost:8080/';

export default {
  name: 'HelloWorld',
  data() {
    '';

    return {};
  },
  mounted() {

  },
  methods: {
    sendSMS(message) {
      // eslint-disable-next-line no-console
      console.log(message);
      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          msg: this.message,
        }),
      }).then(response => response.json())
        .then((result) => {
          if (result.details) {
            const error = result.details
              .map(detail => detail.message);
            this.error = error;
          } else {
            this.error = '';
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.btn:hover {
  cursor: pointer;
}
</style>
