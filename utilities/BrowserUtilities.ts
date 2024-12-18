export function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        randomString += characters[randomIndex];
    }

    return randomString;
}

export function generateRandomNumber(count: number): number {
    if (count <= 0) {
        throw new Error("Count must be a positive number.");
    }

    const min = Math.pow(10, count - 1);
    const max = Math.pow(10, count) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
