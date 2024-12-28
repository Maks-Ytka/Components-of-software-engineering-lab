const fs = require('fs');
const readline = require('readline');

async function processLargeFile(filePath) {
    let wordCount = 0;

    try {
        const fileStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity 
        });

        for await (const line of rl)
            const words = line.trim().split(/\s+/);
            wordCount += words.length;
        }

        console.log(`Word total: ${totalWords}`);

    } catch (error) {
        console.error('Error processing file:', file);
    }
}

const filePath = 'path/to/large/file.txt'; 
processLargeFile(filePath);
