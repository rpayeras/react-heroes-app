import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from "../../routers/PrivateRoute";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => <span>Exiting</span>,
}));

describe("Testing PrivateRoute component", () => {
  Storage.prototype.setItem = jest.fn();

  test("should show the component if it is authenticated and save it on localStorage", () => {
    const context = {
      user: {
        logged: true,
        name: "User",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper.text()).toBe("Private Component");
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
  });

  test("not should show the component if user is not logged", () => {
    const context = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper.text()).toBe("Exiting");
  });
});
