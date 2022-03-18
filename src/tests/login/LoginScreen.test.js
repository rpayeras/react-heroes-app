import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { LoginScreen } from "../../components/login/LoginScreen";
import { types } from "../../types/types";

const mockNavigate = jest.fn();

const context = {
  user: {
    logged: false,
  },
  dispatch: jest.fn(),
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Testing LoginScreen", () => {
  const wrapper = mount(
    <AuthContext.Provider value={context}>
      <MemoryRouter initialEntries={["/login"]}>
        <LoginScreen />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should do dispatch and navigation", () => {
    wrapper.find(".btn.btn-primary").simulate("click");

    expect(context.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "User",
      },
    });

    expect(mockNavigate).toHaveBeenCalledWith("/marvel");

    localStorage.setItem("lastPath", "/dc");

    wrapper.find(".btn.btn-primary").simulate("click");

    expect(mockNavigate).toHaveBeenCalledWith(
      localStorage.getItem("lastPath") || "/marvel"
    );
  });
});
