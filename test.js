function generateMarkdown (objData) {
    
    return `# ${objData.title}
    
This is a story all about how 

## Description
 
${objData.description}`

return `### ${objData.inspiration}

## Inspiration 

The reason you made the project`



return `### ${objData.choice}`
}


module.exports = generateMarkdown