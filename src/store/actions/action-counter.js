const getCounterData = (data) => {
    return (dispatch) => dispatch(setCount(data));
}
const setCount = (data) => {
    const { type, value } = data;
    return {
        type, value
    }
}
export default getCounterData;