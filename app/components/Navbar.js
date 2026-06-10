export default function Navbar() {
    const items = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contact', href: '/contact' },
    ]
    return (
        <>
    <div className="h-auto py-5 w-full flex py-10  items-center justify-center py-4 space-x-4 bg-blue-300">
            {items.map((item, index) => (
            <a 
            key={index} 
            href={item.href}
            className="text-gray-600 hover:text-gray-800">
                {item.label}
            </a>
        ))}
        </div>
        </>
    )
}