import React, {useEffect, useState} from "react";

const MouseCursorHighlighter = () => {
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setCursorPosition({x: e.pageX, y: e.pageY})
        });

        return () => {
            window.removeEventListener(
                'mousemove',
                (e) => {
                    setCursorPosition({x: e.pageX, y: e.pageY})
                }
            );
        };
    }, [cursorPosition])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setCursorPosition({x: e.pageX, y: e.pageY});
    };
    const divStyle = {
        background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    };

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            style={divStyle}
            onMouseMove={handleMouseMove}
        ></div>
    );
};

export default MouseCursorHighlighter;
