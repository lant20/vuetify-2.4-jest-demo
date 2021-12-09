import { /*createLocalVue, mount,*/ shallowMount } from "@vue/test-utils";
import Home from "@/components/Home.vue";
import Vue from "vue";
import Vuetify from "vuetify";
import ZipCodeInput from "@/components/ZipCodeInput.vue";

describe("Home.vue", () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = shallowMount(Home);
  });
  it("renders a vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("Checks the data-title", () => {
    expect(wrapper.vm.title).toMatch("Weather App");
  });

  it("has an h2", () => {
    expect(wrapper.find("h2").exists()).toBe(true);
  });

  it("check if child ZipCodeInput exists", () => {
    expect(wrapper.findComponent(ZipCodeInput).exists()).toBe(true);
  });

  it("test event emitted from ZipCodeInput", () => {
    const zip = wrapper.findComponent(ZipCodeInput);
    zip.vm.$emit("save");
    expect(zip.emitted().save).toBeTruthy();
  });
});
