import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HeroScreen } from "../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Testing HeroScreen", () => {
  test("not should show HeroScreen if not exists any hero at the url", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <Routes>
          <Route path="/hero" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find("h1").text().trim()).toBe("No Hero Page");
  });

  test("should show HeroScreen if exists any hero that exists", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          <Route path="/hero/:id" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find(".row").exists()).toBe(true);
  });

  test("should return to previous screen", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Routes>
          <Route path="/hero/:id" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test("should show No Hero Page if not we have a hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spiderasdasds"]}>
        <Routes>
          <Route path="/hero/:id" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero Page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe("No Hero Page");
  });
});
