function generateMarkdown (objData) {
    
    return `# <h1 align="center">${objData.title}</h1>
![badge](https://img.shields.io/badge/license-${objData.license}-yellow.swg)

## Description
 
${objData.description}`
return
`##Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Test](#test)
-[Questions](#questions)`

return `### ${objData.inspiration}

## Inspiration 

The reason you made the project`

return `### ${objData.formats}

##Format of Code used`

return `### ${objData.license}

##Licenses`

return `###${objData.contributing}

##Contributors`

    `${objData.username}](htpps://github.com/${objData.username})`


return
`## Contact
_This README was generated by [Professional-Generator](https://github.com/santosangel1126/professional-generator.git) _`
;
}
module.exports = generateMarkdown;