import '../../styles/globals.css'

export const metadata = {
    title: 'It is Todoz My Dudez',
    description: 'Your usual todo app made by beginner',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="container mx-auto">{children}</body>
        </html>
    )
}
