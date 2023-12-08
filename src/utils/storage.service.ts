export function saveToSessionStorage(key: string, value: string): void {
    if (!key) {
        throw new Error("Session Storage key can't be falsy");
    }

    sessionStorage.setItem(key, value);
}
