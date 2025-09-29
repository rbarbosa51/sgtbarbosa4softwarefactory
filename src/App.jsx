import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Hub, Projects, CellPage, OS, Book,ArmyCards} from "@/pages";
import { Suspense } from "react";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" index element={<Home />} />

        <Route
          path="hub"
          element={
            <Suspense fallback={null}>
              <Hub />
            </Suspense>
          }
        />

        <Route path="projects" element={<Projects />} />
        <Route path="cell" element={<CellPage />} />
        <Route path="os" element={<OS />} />
        <Route path="book" element={<Book />} />
        {/* <Route path="life" element={<Life />} /> */}
        <Route path="armycards" element={<ArmyCards />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
