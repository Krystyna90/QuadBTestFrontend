import { findBestNumber } from "../utils/findBestNumber.js";
import { displayTable } from "./displayTable.js";

export async function fetchData() {
    try {
        const response = await fetch('http://localhost:5501/api/data');
        const data = await response.json();
        const averageHeading = document.querySelector('.average-heading');
        const bestNumber = findBestNumber(data);

        averageHeading.textContent = `₹${new Intl.NumberFormat('en-US').format(bestNumber)}`;

        const indexToRemove = data.findIndex(item => Number(item.last) === bestNumber);
        data.splice(indexToRemove, 1);
        
        displayTable(data);
 
    } catch (error) {
        throw error;
    }
}