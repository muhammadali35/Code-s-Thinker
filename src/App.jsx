import Navbar from "./Componets/Nav/Nav";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home1 from "./Componets/Pages/Home/Home1/Home1";
import BlogGrid from "./Componets/Pages/Blogs/BlogGrid/BlogGrid";
import Contact from "./Componets/Pages/Contact/Contact";
import Project from "./Componets/Pages/Project/Project";
import OurTeam from "./Componets/Pages/Team/OurTeam";
import BlogAreaRight from "./Componets/Pages/Blogs/BlogAreaRight/BlogAreaRight";
import ChatIcon from "./Componets/ChatSystem/ChatIcon";
import ServiceSection from "./Componets/Pages/ServiceSection/ServiceSection";
import ExecutiveDetail from "./Componets/Pages/Home/Home1/TeamSection/ExecutiveDetail ";
import ScrollToTop from "react-scroll-to-top";
import About from "./Componets/Pages/About/About";
// import Home2 from "./Componets/Pages/Home/Home2/Home2";
function App() {
  return (
     <>
    <BrowserRouter>
    <Navbar/>
     <ChatIcon/>
    {/* <ChatIcon /> */}
    <Routes>
    <Route path="/" element={<Home1/>} />
    <Route path="/home" element={<Home1/>} />
    <Route path="/home1" element={<Home1/>} />
    <Route path="/blogs-grid" element={<BlogGrid/>} />
    <Route path="/view" element={<BlogGrid/>} />
    <Route path="/blogs-right-sidebar" element={<BlogAreaRight/>}/>
    <Route path="/contact" element={<Contact/>} />
    <Route path="/project" element={<Project/>} />
    <Route path="/team" element={<OurTeam/>} />
    <Route path="/services" element={<ServiceSection/>} />
    <Route path="/executive/:id" element={<ExecutiveDetail />} />
    <Route path="/about" element={<About/>} />
    <Route path="/page" element={<Home1/>} />
    <Route path="/view-service" element={<ServiceSection/>} />
    <Route path="/logo" element={<Home1/>} />
  
    {/* <Route path="/home2" element={<Home2/>} /> */}
    
    </Routes>
    <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </BrowserRouter>
    </>
  );
}

export default App;
