let randomKey = () => {
    let string = [
        'a', 'b', 'c', 'd',
        'v', 'b', 't', 'y', 'n',
        'qe', 'll;', 'tre', 'cxx',
        'sw', 'pfg', 'tre', 'mkj'];

    let randomString = () => {
        return Math.floor(Math.random() * 16);
    }

    let randomNum = () => {
        return Math.floor(Math.random() * 13500);
    }
    return string[randomString()] + string[randomString()] + randomNum();

}

export default randomKey;