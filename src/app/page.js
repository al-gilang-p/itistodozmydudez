export default function Page() {
    return (
        <main className="flex flex-col">
            <nav className="w-full flex justify-center place-items-center p-5">
                <h1 className="font-semibold">Todo</h1>
                <h1 className="italic font-extrabold">Z</h1>
            </nav>

            <div>
                <button className="uppercase font-semibold p-2 border-2 border-black hover:text-white hover:bg-black">
                    Add Project
                </button>
            </div>
        </main>
    )
}
