import { /*createLocalVue, mount,*/ shallowMount } from "@vue/test-utils";
import Home from "@/components/Home.vue";
import Vue from "vue";
import Vuetify from "vuetify";
import ZipCodeInput from "@/components/ZipCodeInput.vue";
import I18n from "vue-i18n";
import en from "@/locales/en.json";

describe("Home.vue", () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(Vuetify);
    Vue.use(I18n);
    wrapper = shallowMount(Home, {
      i18n: new I18n({
        locale: "en",
        fallbackLocale: "en",
        messages: { en },
      }),
    });
  });
  it("renders a vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("Checks the title", () => {
    // console.log(wrapper.html());
    // console.log(wrapper.vm.$t);
    // console.log(wrapper.vm.$i18n.messages);
    // console.log(wrapper.vm.$t("title"));
    expect(wrapper.find('[data-test="hometitle"]').text()).toMatch(
      "Weather App"
    );
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
