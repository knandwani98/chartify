import { TRENDING_COINS } from "@/lib/constants";
import { permanentRedirect } from "next/navigation";

const HomePage = () => {
  return permanentRedirect(TRENDING_COINS[0].id);
};

export default HomePage;
