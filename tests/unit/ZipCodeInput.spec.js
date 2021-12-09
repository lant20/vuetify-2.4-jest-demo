import { /*createLocalVue,*/ mount /*, shallowMount*/ } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import ZipCodeInput from "@/components/ZipCodeInput.vue";

describe("ZipCodeInput", () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = mount(ZipCodeInput);
  });

  it("Find input- type text ", () => {
    expect(wrapper.find('[data-test="zipCodeText"]').exists()).toBe(true);
  });
  it("has a button", () => {
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("Enter text and check the value of inputText", () => {
    var textInput = wrapper.find('[data-test="zipCodeText"]');
    textInput.setValue("84102");
    expect(wrapper.vm.inputText).toBe("84102");
  });

  it("click enter button and clear input", () => {
    wrapper.find("button").trigger("click");
    var textInput = wrapper.find('[data-test="zipCodeText"]');
    expect(textInput.text()).toMatch("");
    expect(wrapper.vm.inputText).toBe("");
  });

  it('Check emitted "save" event', () => {
    wrapper.vm.$emit("save", "84102");
    expect(wrapper.emitted().save).toBeTruthy();
  });
});
