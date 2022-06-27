import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";

export function Event() {
  const { slug } = useParams();

  const slugFormated = slug !== undefined ? slug.toString() : "abertura-evento";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video slug={slugFormated} />
        <Sidebar />
      </main>
    </div>
  );
}
