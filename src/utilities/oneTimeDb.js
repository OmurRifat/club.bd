const addToDb = (data) => {
    console.log(data);
    localStorage.setItem("Break-times", JSON.stringify(data))
}
const showDb = () => {
    const stroedCart = localStorage.getItem("Break-times");
    let stroedTime;
    if (stroedCart) {
        stroedTime = JSON.parse(stroedCart);
    }
    else
        stroedTime = 0;
    return stroedTime;
}

export { addToDb, showDb }