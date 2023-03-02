import TeamMember from './TeamMember'
import Teams from './Teams'
const Employees = ({ employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange }) => {

  return (
    <main className="container">
      <div className='row d-flex justify-content-center py-2'>
        <div className='col-8'>
          <div className="dropdown">
            <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
          </div>
        </div>
      </div>
      <div className="row ">
          <TeamMember employees={employees} 
            handleEmployeeCardClick={handleEmployeeCardClick} 
            selectedTeam={selectedTeam} 
          />
      </div>
    </main>
  )
}

export default Employees