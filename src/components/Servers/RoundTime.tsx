// components/Clock.tsx
import React, { useEffect, useState } from "react";

interface RoundTime {
  datetime: Date;
}

export default function RoundTime({ datetime }: RoundTime) {
  const [time, setTime] = useState<Date>(datetime);
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => clearInterval(timerId);
  }, [time]);
  const timetext = time.toISOString().substring(11, 19);
  return <>{timetext}</>;
}
