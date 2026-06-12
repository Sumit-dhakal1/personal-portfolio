export default function Navbar() {
    const items = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/project' },
        { label: 'Contact', href: '/contact' },
    ]
    return (
        <>
    <div className="h-10 py-5 w-full flex py-10 items-center justify-center py-4 space-x-5 bg-red-100">
            {items.map((item, index) => (
            <a 
            key={index} 
            href={item.href}
            className="text-grey-600 hover:text-white -1000">
                {item.label}
            </a>
        ))}
        </div>
        </>
    )
}