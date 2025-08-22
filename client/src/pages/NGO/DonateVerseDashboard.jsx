import React,{useState} from "react";
import MapComponent from "../../components/MapComponent";





const TopNavbar = () => (
  <div className="flex justify-between items-center px-6 py-4 bg-[#002D3D] text-white">
    <div className="flex items-center space-x-2">
      <img src="/logo.png" alt="logo" className="w-8 h-8" />
      <h1 className="font-bold text-xl">Donate Verse</h1>
    </div>
    <div className="hidden md:flex space-x-6">
      <a href="#" className="hover:underline">Home</a>
      <a href="#" className="hover:underline">About</a>
      <a href="#" className="hover:underline">How it works</a>
      <a href="#" className="hover:underline">Contact</a>
    </div>
    <button className="text-teal-300 hover:underline">Log out</button>
  </div>
);

const Sidebar = ({ setActiveSection }) => (
  <div className="w-60 bg-[#F9F9F9] h-screen p-6">
    <h2 className="text-lg font-semibold mb-4">Welcome,<br />Helping Hands NGO</h2>
    <ul className="space-y-4 text-gray-700">
      <li
        className="bg-blue-100 rounded px-3 py-2 cursor-pointer"
        onClick={() => setActiveSection("notifications")}
      >
        🔔 Notifications
      </li>
      <li
        className="hover:bg-gray-200 px-3 py-2 rounded cursor-pointer"
        onClick={() => setActiveSection("dashboard")}
      >
        🏠 Dashboard
      </li>
      <li
        className="hover:bg-gray-200 px-3 py-2 rounded cursor-pointer"
        onClick={() => setActiveSection("settings")}
      >
        ⚙ Settings
      </li>
      <li
        className="hover:bg-gray-200 px-3 py-2 rounded cursor-pointer"
        onClick={() => setActiveSection("availableOrders")}
      >
        📋 Available Orders
      </li>
    </ul>
  </div>
);


const SearchBar = () => (
  <input
    type="text"
    placeholder="Search Restaurants by name....."
    className="w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm mb-4"
  />
);

const Tabs = () => (
  <div className="flex space-x-4 mb-4">
    <button className="px-4 py-1 border rounded-full bg-white">All</button>
    <button className="px-4 py-1 border rounded-full bg-white">Unread</button>
    <button className="px-4 py-1 border rounded-full bg-white">Collected</button>
  </div>
);

const DonationCard = () => (
  <div className="border rounded-md p-4 shadow-md mb-6 bg-white">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">Posted 25 mins ago</p>
        <h2 className="text-lg font-semibold">New Donation Available</h2>
        <p className="text-sm text-gray-600">Fresh prepared meals available for collection</p>
      </div>
      <span className="bg-orange-400 text-white text-sm px-3 py-1 rounded-full">New</span>
    </div>

    <div className="flex items-center mt-4 space-x-4">
      <img src="/restaurant-icon.png" alt="icon" className="w-6 h-6" />
      <p className="font-medium">Savali Pure Veg</p>
      <div className="flex items-center space-x-1">
        <img src="/location-icon.png" alt="location" className="w-4 h-4" />
        <p>1.2 kms away</p>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm">
      <p><strong>Quantity:</strong> 50 Servings</p>
      <p><strong>Expires in:</strong> 2 hrs</p>
      <p><strong>Food type:</strong> Vegetarian</p>
      <p><strong>Contact:</strong> 9529612345</p>
    </div>

     <div className="mt-4 ml-100 flex flex-wrap gap-3">
  <button className="ml-10 rounded bg-blue-400 px-6 py-4 text-white">Accept</button>
  <button className="rounded bg-gray-300 px-6 py-4">Deny</button>
</div>
<div className="mx-[40px] mt-4 flex  flex-wrap gap-3">
  <button className="w-[300px] rounded bg-blue-600 px-4 py-2 text-white">Live Chat</button>
</div>
  </div>
);
const DonationCardcollected = ()=>(
  <div className="border rounded-md p-4 shadow-md mb-6 bg-white">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">Posted 25 mins ago</p>
        <h2 className="text-lg font-semibold">New Donation Available</h2>
        <p className="text-sm text-gray-600">Fresh prepared meals available for collection</p>
      </div>
      <span className="bg-green-400 text-white text-sm px-3 py-1 rounded-full">Collected</span>
    </div>

    <div className="flex items-center mt-4 space-x-4">
      <img src="/restaurant-icon.png" alt="icon" className="w-6 h-6" />
      <p className="font-medium">Savali Pure Veg</p>
      <div className="flex items-center space-x-1">
        <img src="/location-icon.png" alt="location" className="w-4 h-4" />
        <p>1.2 kms away</p>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm">
      <p><strong>Quantity:</strong> 50 Servings</p>
      <p><strong>Expires in:</strong> 2 hrs</p>
      <p><strong>Food type:</strong> Vegetarian</p>
      <p><strong>Contact:</strong> 9529612345</p>
    </div>

     
<div className="mx-[40px] mt-4 flex  flex-wrap gap-3">
  <button className="w-[300px] rounded bg-blue-600 px-4 py-2 text-white">Live Chat</button>
</div>
  </div>
);
const DonationCardaccepted=()=>(

 <div className="border rounded-md p-4 shadow-md mb-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">Posted 30 mins ago</p>
          <h2 className="text-lg font-semibold">Buffet Donation Available</h2>
          <p className="text-sm text-gray-500">Large Quantity Form Event</p>
        </div>
        <div className="text-right">
          <span className="bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded">
            Pending
          </span>
          <p className="text-sm font-semibold mt-1">
            Pick up By: <span className="text-black">9:00 pm</span>
          </p>
        </div>
      </div>

      {/* Location Info */}
      <div className="flex mt-4 gap-4">
        <div className="flex-1">
          <div className="flex items-center mt-4 space-x-4">
      <img src="/restaurant-icon.png" alt="icon" className="w-6 h-6" />
      <p className="font-medium">Savali Pure Veg</p>
      <div className="flex items-center space-x-1">
        <img src="/location-icon.png" alt="location" className="w-4 h-4" />
        <p>1.2 kms away</p>
      </div>
    </div>
          

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-y-2 text-sm mb-2">
            <p><span className="font-semibold">Quantity:</span> 100–130 Servings</p>
            <p><span className="font-semibold">Expires in:</span> 2 hrs</p>
            <p><span className="font-semibold">Food type:</span> Mixed</p>
            <p><span className="font-semibold">Contact:</span> 9529612345</p>
          </div>

          {/* Special Instruction */}
          <p className="text-sm text-gray-700 mt-2">
            <span className="font-semibold">Special Instruction:</span><br />
            The quantity is more so bring a big vehicle to pick it
          </p>

          {/* Chat Button */}
          <div className="mx-[40px] mt-4 flex  flex-wrap gap-3">
  <button className="w-[300px] rounded bg-blue-600 px-4 py-2 text-white">Live Chat</button>
</div>
        </div>

        {/* Static Map Placeholder */}
        <div>
          <div style={{ height: "200px", width: "500px" }}>
  <MapComponent lat={19.0760} lon={72.8777} />
</div>
          
          {/* Replace above src with your map or image */}  
        </div>
      </div>
    </div>
);

  const MainContent = ({ activeSection }) => (
  <div className="flex-1 p-6 bg-gray-50 min-h-screen">
    <SearchBar />
    <div className="bg-[#002D3D] text-white font-semibold text-lg px-6 py-2 rounded mb-4">
      Donor Details
    </div>
    <Tabs />

    {/* Conditionally render based on activeSection */}
    {activeSection === "notifications" && (
      <>
        <DonationCard />
        <DonationCardcollected />
      </>
    )}
    {activeSection === "availableOrders" && (
      <>
        <DonationCardaccepted />
      </>
    )}
    {activeSection === "dashboard" && (
      <p className="text-gray-600 text-sm">Dashboard coming soon...</p>
    )}
    {activeSection === "settings" && (
      <p className="text-gray-600 text-sm">Settings page coming soon...</p>
    )}
  </div>
);



const DonateVerseDashboard = () => {
  const [activeSection, setActiveSection] = useState("notifications");

  return (
    <div>
      <TopNavbar />
      <div className="flex">
        <Sidebar setActiveSection={setActiveSection} />
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
};


export default DonateVerseDashboard;