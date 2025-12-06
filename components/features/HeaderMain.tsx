import Navigation from "../common/Navigation";
import SearchBar from "../common/SearchBar";
import LoginButton from "../common/LoginButton";

export default function HeaderMain() {
  return (
    <div className="w-full flex justify-between items-center">
      <SearchBar />
      <Navigation />
      <LoginButton />
    </div>
  );
}
