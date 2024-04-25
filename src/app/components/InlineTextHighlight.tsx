import React from "react";

const InlineTextHighlight = ({children}: { children: React.ReactNode }) => {
    return (
        <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            {children}
        </span>
    );
};

export default InlineTextHighlight;
