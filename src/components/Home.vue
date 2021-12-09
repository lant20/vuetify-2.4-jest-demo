<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>{{ title }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col clos="12">
        <ZipCodeInput v-on:save="processZipCode($event)" />
      </v-col>
    </v-row>
    <v-row>
      <v-col clos="12">
        <DisplayTemperature
          :city="city"
          :fahrenheitTemperature="fahrenheitTemperature"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Model from "./Model";
import DisplayTemperature from "./DisplayTemperature.vue";
import ZipCodeInput from "./ZipCodeInput.vue";
var model = new Model();
export default {
  components: {
    DisplayTemperature,
    ZipCodeInput,
  },
  data: () => ({
    title: "Weather App",
    fahrenheitTemperature: null,
    city: "",
  }),
  methods: {
    processZipCode(code) {
      var data = model.fetchResponse(window.fetch, code);
      data?.then?.((res) => {
        let kelvinTemp = res.main.temp;
        this.FahrenheitConverter(kelvinTemp);
        this.city = res.name;
      });
    },
  },
};
</script>
