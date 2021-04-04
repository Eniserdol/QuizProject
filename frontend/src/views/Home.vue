<template lang="pug">
  .home

    h1 Welcome
    h2 please click Start for defined quizzes or define your quiz
    #nav
      router-link(to="/quizzes") Start
    router-view
</template>
