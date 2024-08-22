import { useEffect, useState } from "react";

export default function ProgressBar({timer, interval}) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        setInterval(() => {
            setRemainingTime((prevTime) => {
                console.log(prevTime);
                if (prevTime <= 0) {
                    return 0;
                }
                return prevTime - interval
            });
        }, interval);
    }, []);

    <progress max={timer} value={remainingTime} />
}