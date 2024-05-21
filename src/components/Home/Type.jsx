import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                wrapperClassName:"fs-1",
                cursorClassName:"fs-1",
                strings: [
                    "Android Developer",
                    "Dot Net Developer",
                    "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
