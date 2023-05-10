import { shallowMount } from "@vue/test-utils";
import ListComponent from "@/components/MemberListComponent.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(ListComponent, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
