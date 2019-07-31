const messages = {
    'truefalse': 'Duck',
    'falsetrue': 'Duck duck',
    'truetrue': 'Duck duck goose!',
    'falsefalse': undefined
}
for (let i of Array(75).keys()){
    i += 1
    console.log(messages[(i % 3 === 0).toString() + (i % 5 === 0).toString()] || i)
}