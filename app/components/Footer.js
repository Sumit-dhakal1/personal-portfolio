export default function Footer() {
    const items = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contact', href: '/contact' },
    ]
    return (
        <>
        <div className="h-50 py-5 w-full flex py-10  items-center justify-center py-4 space-x-4 bg-orange ">
            {items.map((item, index) => (
            <a 
            key={index} 
            href={item.href}
            className="text-black-200 hover:text-white ">
                {item.label}
            </a>
        ))}
        </div>
        </>
    );
}