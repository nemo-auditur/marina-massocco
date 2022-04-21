import { connectToDatabase } from '../../lib/mongodb'

const Project = ({project}) => {
    return(
        <>
            <div>details page</div>
            <div>{project.title}</div>
        </>
    )
}

export default Project
