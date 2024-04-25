import React from 'react';

const SectionHeader = ({children}: { children: React.ReactNode }) => {
    return (
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-4xl">{children}</h1>
    );
};

export default SectionHeader;
