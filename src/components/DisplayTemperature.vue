<template>
  <div>
    <v-alert data-test="alertElement" type="success" :value="true" dense>
      The current temperature in {{ city }} is {{ fahrenheitTemperature }} F.
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
    },
    fahrenheitTemperature: {
      type: Number,
    },
  },
};
</script>
