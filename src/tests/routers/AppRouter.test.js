import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe("Testing AppRouter", () => {
  test("should show login page if not is logged", () => {
    const contextValues = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValues}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toEqual("Login");
  });

  test("should show the marvel component", () => {
    const contextValues = {
      user: {
        logged: true,
        name: "User",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValues}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
