import prompt from "@/prompter";

const main = async () => {
    console.log('Currency Conversion Menu')
    console.log('1. Convert from Euros to US Dollars (EUR to USD)')
    console.log('2. Convert from US Dollars to Euros (USD to EUR)')
    const conversionOption = parseInt(await prompt('Please select a conversion option (1/2): '))

    if (conversionOption === 1) {
        await convertFromEuros()
    }

    if (conversionOption === 2) {
        await convertFromDollars()
    }
}

const convertFromEuros = async () => {
    const euros = parseFloat(await prompt('Enter the amount in Euros (EUR): '))
    const dollars = euros * 1.18

    console.log(`The equivalent amount in US Dollars (USD) is: $${dollars.toFixed(2)}`)
}

const convertFromDollars = async () => {
    const dollars = parseFloat(await prompt('Enter the amount in US Dollars (USD): '))
    const euros = dollars / 1.18

    console.log(`The equivalent amount in Euros (EUR) is: ${euros.toFixed(2)} EUR`)
}

main()