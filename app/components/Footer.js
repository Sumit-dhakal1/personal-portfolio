export default function Footer() {
    const some = [
        {name : "xitiz", href : "/"}
    ]
    return (
        <>
        <div className="h-50 py-5 w-full flex py-10  items-center justify-center py-4 space-x-4  bg-cream-900 ">
            <ul>
            {some.map((id, index) => (
                <li
                key={index}
                >
                    {id.name}
                </li>
            ))}
            </ul>
        </div>
        </>
    );
}

