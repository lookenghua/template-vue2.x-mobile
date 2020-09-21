import { shallowMount } from "@vue/test-utils";
import VSwiper from "../../src/components/VSwiper";

const factory = (values = {}) => {
  return shallowMount(VSwiper, {
    props: values
  });
};
describe("VSwiper", () => {
  it("should be mounted", () => {
    const wrapper = factory({ options: {} });
    expect(wrapper.isVisible()).toBeTruthy();
  });
});
