const messages = {
    'truefalse': 'Duck',
    'falsetrue': 'Duck duck',
    'truetrue': 'Duck duck goose!',
    'falsefalse': undefined
}
for (let i = 1; i <=75; i++){
    console.log(messages[(i % 3 === 0).toString() + (i % 5 === 0).toString()] || i)
}