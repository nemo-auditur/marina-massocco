import Coverpage from '../../components/Coverpage/coverpage'
import TopProjects from '../../components/TopProjects/topProjects'

export default function Landingpage({topProjects}) {
    return (
      <>
        <Coverpage/>
        <TopProjects topProjects={topProjects}/>
      </>
    )
}
