import React, { useEffect } from "react";
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('https://play.google.com/store/apps/details?id=dog.fa.so.app');
    }, [])
    return (
        <div>
        </div>
    );
};

export default index;