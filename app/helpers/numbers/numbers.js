const getRandomNumber = (start, end) => {
    return Math.floor(Math.random() * end) + start;
}

export default {
    getRandomNumber,
}