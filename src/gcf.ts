import prompt from "@/prompter";

const main = async () => {
    const firstInt = parseInt(await prompt('Please enter the first positive integer: '))
    const secondInt = parseInt(await prompt('Please enter the second positive integer: '))

    const largestInt = firstInt > secondInt ? firstInt : secondInt

    let gcf: number | null = null

    for (let i = largestInt; i !== 1; i--) {
        if (firstInt % i === 0 && secondInt % i === 0) {
            gcf = i
            break
        }
    }

    console.log(`The Greatest Common Factor (GCF) of ${firstInt} and ${secondInt} is: ${gcf}`)
}

main()