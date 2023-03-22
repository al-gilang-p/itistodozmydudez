import Link from 'next/link'

const PrimaryButton = ({ url, children }) => {
    return (
        <Link
            href={url}
            className="flex items-center uppercase w-fit font-semibold p-2 border-2 text-white bg-black hover:bg-gray-600"
        >
            {children}
        </Link>
    )
}

export default PrimaryButton
