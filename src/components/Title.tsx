import React from "react";

const Title = ({children}: { children: React.ReactNode }) => {
    return (
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white">
            {children}
        </h1>
    );
};

export default Title;
