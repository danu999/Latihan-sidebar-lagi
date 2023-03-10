import { SidebarProvider } from "@/context/SidebarContext";
import "@/styles/sidebar.css";


export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
