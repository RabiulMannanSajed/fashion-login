

const Countdown = () => {
    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max  ">
            <div className="flex flex-col p-2  rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 29 }}></span>
                </span>
                days
            </div>
            <div className="flex flex-col p-2  rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 23 }}></span>
                </span>
                hours
            </div>
            <div className="flex flex-col p-2  rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 59 }}></span>
                </span>
                min
            </div>
            <div className="flex flex-col p-2  rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 60 }}></span>
                </span>
                sec
            </div>
        </div>
    );
};

export default Countdown;