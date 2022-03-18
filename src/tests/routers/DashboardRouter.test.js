import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe("Testing DashboardRoutes", () => {
  const context = {
    user: {
      logged: true,
      name: "Robert",
    },
  };

  test("should render properly and navigate to root", () => {
    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/"]}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("MarvelScreen");
  });

  test("should render properly and navigate to DC", () => {
    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/dc"]}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("DcScreen");
  });
});
