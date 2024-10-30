import readline from 'node:readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const prompt = (question?: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        rl.question(question ?? '', input => {
            resolve(input)
        });
    })
}

export default prompt