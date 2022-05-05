function generateMarkdown (objData) {
    
    return `# ${objData.title}
    
This is a story all about how 

## Description

${objData.description}`
}

module.exports = generateMarkdown