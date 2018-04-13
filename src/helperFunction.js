
export default {
    hashtable: (projects)=>{
        return projects.reduce((acc,project) => {
            return   Object.assign(acc, {[project.shortName]:project })
          },{})
    }
}


