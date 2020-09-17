import React, { useEffect } from "react";
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/letter_July31.pdf');
    }, [])
    return (
        <div>
        </div>
    );
};

export default index;