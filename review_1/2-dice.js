const getDice = (dice = 20) => {
    const MIN_DICE = 1;
    return Math.floor(Math.random() * (dice - MIN_DICE + 1) + MIN_DICE);
};
