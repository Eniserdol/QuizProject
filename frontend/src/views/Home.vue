<template lang="pug">
  .home

    h1 Welcome
    h2 Please Click Start for Quizzes
    #nav
      router-link.start-btn(to="/quizzes") Start
    router-view
</template>
