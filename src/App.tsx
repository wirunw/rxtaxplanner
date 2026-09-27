import { MobileRuntime } from "./mobile";
import Prototype from "./Prototype";

export default function App() {
  const phonePreview = new URLSearchParams(window.location.search).get("preview") === "phone";
  return (
    <MobileRuntime fullPage={!phonePreview}>
      <Prototype />
    </MobileRuntime>
  );
}
