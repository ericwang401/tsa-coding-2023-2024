import prompt from "@/prompter";

const main = async () => {
    const total = parseFloat(await prompt('Enter the total amount of change in dollars and cents: '))

    const [dollars, remainingAfterDollars] = [
        Math.floor(total),
        total - Math.floor(total)
    ]

    const [quarters, remainingAfterQuarters] = [
        (remainingAfterDollars - (remainingAfterDollars % .25)) / .25,
        (remainingAfterDollars % .25)
    ]

    const [dimes, remainingAfterDimes] = [
        (remainingAfterQuarters - (remainingAfterQuarters % .10)) / .10,
        (remainingAfterQuarters % .10)
    ]

    const [nickels, remainingAfterNickels] = [
        (remainingAfterDimes - (remainingAfterDimes % .05)) / .05,
        (remainingAfterDimes % .05)
    ]

    console.log('Minimum change consists of:')
    console.log(`Dollars: ${dollars}`)
    console.log(`Quarters: ${quarters}`)
    console.log(`Dimes: ${dimes}`)
    console.log(`Nickels: ${nickels}`)
    console.log(`Pennies: ${Math.floor(remainingAfterNickels * 100)}`)
}

main()