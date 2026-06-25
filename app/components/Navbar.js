import { href } from "react-router-dom";

export default function Navbar() {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#Project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="flex gap-2 items-center justify-center px-20 bg-white-500 backdrop-blur bg-black/10  ">
        <div className="h-3 py-5 w-full flex py-8 items-center justify-center py-4 space-x-5 ">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-black-600 hover:text-white -1000"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="bg-green-600 px-5 py-1 bg-blue-100 text-black rounded-full  ">
            <a href="/login"
            className="text-white hover:text-white"
            > Login </a>
        </div>


          <div className="bg-green-600 px-5 py-1 bg-blue-100 text-black rounded-full ">
            <a href="/register"
            className="text-white hover:text-white"
            > register </a>
        </div>
      </div>
    
  
    </>
  );
}
