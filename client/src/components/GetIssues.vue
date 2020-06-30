<template>
  <div class="container">
    <div class="hello">
        <h1>GIT Issues</h1>
        <p>A tool to help you get a jump start on new issues for open source projects</p>
        <hr>
        <p>Choose a label to find issues for:</p>
        <label for="gfi">Good First Issue</label>
        <input type="radio" name="gfi" id="gfi" value="good-first-issue" v-model="picked">
        <br>
        <label for="hw">Help Wanted</label>
        <input type="radio" name="hw" id="hw" value="help-wanted" v-model="picked">
        <br>
        <label for="enhance">Enhancement</label>
        <input type="radio" name="enhance" id="enhance" value="enhancement" v-model="picked">
        <br>
        <button v-on:click="getIssues(picked)">Find Issues</button>
    </div>
  </div>
</template>

<script>
const githubAPI = 'https://api.github.com';

export default {
  name: 'GetIssues',
  data() {
    '';

    return {};
  },
  mounted() {

  },
  methods: {
    getIssues(label) {
      const searchIssues = `${githubAPI}/search/issues?q=`;
      const labels = 'label:';
      const gfi = 'good-first-issue';
      const enhancement = 'enhancement';
      const hw = 'help-wanted';
      let searchString = '';

      // console.log(label);
      if (label === 'good-first-issue') {
        searchString = searchIssues.concat(labels).concat(gfi);
        // console.log(searchString);
      } else if (label === 'help-wanted') {
        searchString = searchIssues.concat(labels).concat(hw);
        // console.log(searchString);
      } else if (label === 'enhancement') {
        searchString = searchIssues.concat(labels).concat(enhancement);
        // console.log(searchString);
      }


      fetch(searchString, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch(error => console.error(error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
