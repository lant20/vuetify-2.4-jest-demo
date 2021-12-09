import { /*createLocalVue, mount,*/ shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import DisplayTemperature from "@/components/DisplayTemperature.vue";

describe("DisplayTemperature", () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = shallowMount(DisplayTemperature, {
      propsData: {
        city,
        fahrenheitTemperature,
      },
    });
  });
  let city = "Salt Lake City";
  let fahrenheitTemperature = 39;

  it("has a alert element", () => {
    expect(wrapper.find('[data-test="alertElement"]').exists()).toBe(true);
  });

  it("check props", () => {
    expect(wrapper.vm.city).toBe("Salt Lake City");
  });

  it("check the output", () => {
    expect(wrapper.text()).toMatch(
      `The current temperature in ${city} is ${fahrenheitTemperature} F.`
    );
  });
});
