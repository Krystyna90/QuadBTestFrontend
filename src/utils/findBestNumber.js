export function findBestNumber (data) {
    const pricesArray = [];

    data.forEach((item) => {
        const formattedNumber = Number(item.last);
        pricesArray.push(formattedNumber);
       });

       return Math.max(...pricesArray);
}