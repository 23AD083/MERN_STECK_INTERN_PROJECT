
const fs = require('fs');
const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString();
};
const initializeFile = () => {
    const initialContent = `File created on: ${getCurrentDateTime()}\n`;
    fs.writeFileSync("date_time_log.txt", initialContent, 'utf8');
    console.log('File initialized successfully!');
};
const appendDateTime = () => {
    const dateTime = getCurrentDateTime();
    fs.appendFileSync("date_time_log.txt", `Updated on: ${dateTime}\n`, 'utf8');
    console.log(`Appended: ${dateTime}`);
};
console.log('Logging date and time to the file...');
initializeFile();
setInterval(() => {appendDateTime();}, 5000);
