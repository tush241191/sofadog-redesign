import React, { useEffect } from "react";
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('https://apple.co/2Wr2Tyx');
    }, [])
    return (
        <div>
        </div>
    );
};

export default index;