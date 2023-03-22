import Link from 'next/link'
import '../../styles/globals.css'

export const metadata = {
    title: 'It is Todoz My Dudez',
    description: 'Your usual todo app made by beginner',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="container mx-auto flex flex-col">
                <nav className="w-full p-5">
                    <Link
                        href={'/'}
                        className="flex justify-center items-center"
                    >
                        <h1 className="font-semibold">Todo</h1>
                        <h1 className="italic font-extrabold text-4xl">Z</h1>
                    </Link>
                </nav>
                {children}
            </body>
        </html>
    )
}
