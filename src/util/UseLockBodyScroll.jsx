import { useLayoutEffect } from 'react';

export default function UseLockBodyScroll(shouldLock = true) {
    useLayoutEffect(() => {
        if (!shouldLock) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => { document.body.style.overflow = originalOverflow; }
    }, [shouldLock]);
}