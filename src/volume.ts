import prompt from "@/prompter";

interface Shape {
    id: number
    type: string
    volume: number
}

const pi = 3.14159

const main = async () => {
    const shapes: Shape[] = []

    const numOfShapes = parseInt(await prompt())
    for (let i = 1; i <= numOfShapes; i++) {
        const rawInput = await prompt()
        const split = rawInput.split(' ')

        if (split[0] === 'cube') {
            shapes.push({
                id: parseInt(split[split.length - 1]),
                type: 'cube',
                volume: Math.pow(parseFloat(split[1]), 3)
            })
        } else if (split[0] === 'sphere') {
            shapes.push({
                id: parseInt(split[split.length - 1]),
                type: 'sphere',
                volume: (4 / 3) * pi * Math.pow(parseFloat(split[1]), 3)
            })
        } else if (split[0] === 'cylinder') {
            shapes.push({
                id: parseInt(split[split.length - 1]),
                type: 'cylinder',
                volume: pi * Math.pow(parseFloat(split[1]), 2) * parseFloat(split[2])
            })
        } else if (split[0] === 'cone') {
            shapes.push({
                id: parseInt(split[split.length - 1]),
                type: 'cone',
                volume: (1 / 3) * pi * Math.pow(parseFloat(split[1]), 2) * parseFloat(split[2])
            })
        }
    }

    let largestShape: Shape | null = null

    shapes.forEach(shape => {
        if (largestShape === null) {
            largestShape = shape
        } else if (shape.volume > largestShape.volume) {
            largestShape = shape
        }
    })

    console.log(`${largestShape!.id} ${largestShape!.type} ${largestShape!.volume.toFixed(3)}`)
}

main()