import dynamic from "next/dynamic";
import Loading from "./components/Loading";

export default function Home() {
  const DynamicComponentWithCustomLoading = dynamic(
    () => import("./home/index"),
    { loading: () => <Loading /> }
  );
  return <DynamicComponentWithCustomLoading />;
}
