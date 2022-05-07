function generateMarkdown (objData) {
    
    return `# ${objData.title}
    <h1 align="center">${objData.title}</h1>
![badge](https://img.shields.io/badge/license-${objData.licence}-brightgreen)<br/>

## Description
 
${objData.description}`

`##Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Test](#test)
-[Questions](#questions)`



return `${objData.Installation}
## Installation`

return `### ${objData.inspiration}

## Inspiration 

The reason you made the project`



return `### ${objData.choice}`
}


module.exports = generateMarkdown