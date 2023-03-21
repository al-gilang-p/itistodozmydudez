import '../../styles/globals.css'

export const metadata = {
    title: 'It is Todoz My Dudez',
    description: 'Your usual todo app made by beginner',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="container mx-auto flex flex-col">
                <nav className="w-full flex justify-center place-items-center p-5">
                    <h1 className="font-semibold">Todo</h1>
                    <h1 className="italic font-extrabold text-4xl">Z</h1>
                </nav>
                {children}
            </body>
        </html>
    )
}
