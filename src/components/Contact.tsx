const Contact = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <form
                    action="https://getform.io/f/8ec6a29e-d904-4aab-b176-6b50e09d9411"
                    method="POST"
                    className="flex flex-col w-full"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={10}
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <button
                        type="button"
                        className="text-center inline-block px-8 py-3 w-max font-medium rounded-md drop-shadow-md
                        bg-teal-400/50 text-xs text-white hover:stroke-white hover:bg-teal-800"
                    >
                        Work With Me
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
