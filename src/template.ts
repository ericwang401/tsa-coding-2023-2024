import prompt from '@/prompter'

const main = async () => {
    const name = await prompt()
    console.log(`Hello, ${name}!`)
    const age = await prompt()
    console.log(`wow ur old ${age}!`)
}

main()