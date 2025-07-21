export default function Project() {
    return (
        <section className="space-y-12">
            <p className="text-5xl font-semibold mb-8 text-black dark:text-white">My Selected Work</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-4 w-full" >
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Project 1</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"></div>
            </div>
        </section>
    )
}