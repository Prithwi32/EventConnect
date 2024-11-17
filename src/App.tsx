import Navbar from "./components/Navbar"
import EventBanner from "./components/EventBanner"
import Founders from "./components/Founders"
import Events from "./components/Events"
import Sponsors from "./components/Sponsors"
import ContactUs from "./components/ContactUs"
function App() {
  return (
    <div className="bg-purple-100">
      <Navbar/>
      <EventBanner/>
      <Founders/>
      <Events/>
      <Sponsors/>
      <ContactUs/>
      <Navbar/>
    </div>
  )
}

export default App
